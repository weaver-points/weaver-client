# Weaver Client Documentation 

This guide provides a step-by-step approach to integrating on-chain campaigns into the Weaver platform to enhance user retention, leveraging Starknet's Layer 2 scaling solution. It aligns with the product-driven approach outlined in [Weaver: A Product-Driven Approach to Boosting User Retention with On-Chain Campaigns on Starknet](https://medium.com/@samuonanikesamuel123/weaver-a-product-driven-approach-to-boosting-user-retention-with-on-chain-campaigns-on-starknet-95d5a982b551). The guide includes setup instructions, code examples, and best practices for tracking user interactions and distributing rewards.

## Table of Contents
1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Setting Up the Campaign Smart Contract](#setting-up-the-campaign-smart-contract)
4. [Integrating with Weaver Frontend](#integrating-with-weaver-frontend)
5. [Tracking User Interactions](#tracking-user-interactions)
6. [Distributing Rewards](#distributing-rewards)
7. [Testing and Deployment](#testing-and-deployment)
8. [Best Practices](#best-practices)
9. [Resources](#resources)

## Overview

On-chain campaigns on Weaver incentivise user engagement through gamified, blockchain-based interactions on Starknet. These campaigns leverage smart contracts to define rules, track user actions (e.g., transactions, social shares), and distribute rewards (e.g., tokens, NFTs). This guide walks you through creating a campaign where users earn points for completing tasks, which are then redeemable for rewards, ensuring transparency and immutability via Starknet.

## Prerequisites

Before starting, ensure you have the following:

- **Node.js and npm**: Install Node.js (v16 or higher) and npm for managing dependencies.
- **Starknet Development Environment**: Install the [Starknet.js.js](https://www.starknet.io/docs/starknet-js/) library and a Starknet-compatible wallet (e.g., Argent X or Braavos).
- **Cairo Knowledge**: Familiarity with Cairo, Starknet's smart contract language.
- **Weaver Client Setup**: Clone and set up the `weaver-client` repository:
  ```bash
  git clone https://github.com/weaver-points/weaver-client.git
  cd weaver-client
  npm install
  ```
- **Starknet Account**: A deployed Starknet account with testnet ETH for gas fees. Use the [Starknet Goerli faucet](https://faucet.goerli.starknet.io/) for testnet funds.
- **Hardhat or Scarb**: Tools for compiling and deploying Cairo contracts.

## Setting Up the Campaign Smart Contract

Create a Cairo smart contract to manage campaign logic, including task registration, user participation, and reward distribution.

1. **Write the Campaign Contract**

Create a file named `campaign.cairo` in your project’s contracts directory:

```cairo
%lang starknet
from starkware.cairo.common.cairo_builtins import HashBuiltin
from starkware.cairo.common.uint256 import Uint256
from starkware.starknet.common.syscalls import get_caller_address

// Storage for campaign details
@storage_var
func campaign_points(user: felt) -> (points: Uint256) {
}

// Storage for campaign metadata
@storage_var
func campaign_metadata(campaign_id: felt) -> (active: felt, reward_pool: Uint256) {
}

// Event emitted when points are awarded
@event
func PointsAwarded(campaign_id: felt, user: felt, points: Uint256) {
}

// Constructor to initialise campaign
@constructor
func constructor{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    campaign_id: felt, reward_pool: Uint256
) {
    campaign_metadata.write(campaign_id, (1, reward_pool));
    return ();
}

// Function to award points to a user
@external
func award_points{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    campaign_id: felt, points: Uint256
) {
    let (caller) = get_caller_address();
    let (current_points) = campaign_points.read(caller);
    let new_points = Uint256(current_points.low + points.low, current_points.high + points.high);
    campaign_points.write(caller, new_points);
    PointsAwarded.emit(campaign_id, caller, points);
    return ();
}

// Function to check if the campaign is active
@view
func is_campaign_active{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    campaign_id: felt
) -> (active: felt) {
    let (metadata) = campaign_metadata.read(campaign_id);
    return (metadata.active,);
}
```

2. **Compile and Deploy**

Use Scarb or Hardhat to compile and deploy the contract to Starknet’s Goerli testnet:

```bash
scarb build
starknet-deploy --network goerli --contract campaign
```

Note the deployed contract address for frontend integration.

## Integrating with Weaver Frontend

Integrate the campaign contract with the Weaver frontend using Starknet.js to allow users to interact with campaigns.

1. **Install Starknet.js**

Ensure `starknet` is installed in your `weaver-client` project:

```bash
npm install starknet
```

2. **Create a Campaign Service**

Create a file named `campaignService.ts` in the `src/services` directory:

```typescript
import { Contract, Provider, Account, uint256 } from 'starknet';
import campaignAbi from '../abis/campaign.json'; // ABI from compiled contract

export class CampaignService {
  private contract: Contract;
  private account: Account;

  constructor(contractAddress: string, provider: Provider, account: Account) {
    this.contract = new Contract(campaignAbi, contractAddress, provider);
    this.account = account;
  }

  async awardPoints(campaignId: number, points: number) {
    const call = this.contract.populate('award_points', {
      campaign_id: campaignId,
      points: uint256.bnToUint256(points),
    });
    const tx = await this.account.execute(call);
    await this.account.waitForTransaction(tx.transaction_hash);
    return tx;
  }

  async isCampaignActive(campaignId: number): Promise<boolean> {
    const result = await this.contract.is_campaign_active(campaignId);
    return result.active === 1;
  }
}
```

3. **Connect to Frontend**

Update `src/App.tsx` to include a campaign interaction component:

```typescript
import React, { useState } from 'react';
import { Provider, Account, ec } from 'starknet';
import { CampaignService } from './services/campaignService';

const provider = new Provider({ sequencer: { network: 'goerli-alpha' } });
const privateKey = 'YOUR_PRIVATE_KEY'; // Replace with secure key management
const starkKeyPair = ec.genKeyPair();
const account = new Account(provider, 'YOUR_ACCOUNT_ADDRESS', starkKeyPair);
const campaignService = new CampaignService('CONTRACT_ADDRESS', provider, account);

const CampaignComponent: React.FC = () => {
  const [campaignId, setCampaignId] = useState(1);
  const [points, setPoints] = useState(100);
  const [status, setStatus] = useState('');

  const handleAwardPoints = async () => {
    try {
      await campaignService.awardPoints(campaignId, points);
      setStatus('Points awarded successfully!');
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>On-Chain Campaign</h2>
      <input
        type="number"
        value={campaignId}
        onChange={(e) => setCampaignId(Number(e.target.value))}
        placeholder="Campaign ID"
      />
      <input
        type="number"
        value={points}
        onChange={(e) => setPoints(Number(e.target.value))}
        placeholder="Points to Award"
      />
      <button onClick={handleAwardPoints}>Award Points</button>
      <p>{status}</p>
    </div>
  );
};

export default CampaignComponent;
```

Replace `YOUR_PRIVATE_KEY` and `YOUR_ACCOUNT_ADDRESS` with your Starknet account details, and `CONTRACT_ADDRESS` with the deployed contract address.

## Tracking User Interactions

Track user interactions (e.g., transactions, social shares) to award points. Use Starknet events to monitor on-chain actions.

1. **Listen for Events**

Modify `campaignService.ts` to include event listening:

```typescript
async listenForPointsAwarded(callback: (campaignId: number, user: string, points: number) => void) {
  this.contract.on('PointsAwarded', (campaignId, user, points) => {
    callback(Number(campaignId), user.toString(), uint256.uint256ToBN(points).toNumber());
  });
}
```

2. **Integrate in Frontend**

Update `CampaignComponent` to display awarded points:

```typescript
import React, { useEffect, useState } from 'react';
// ... other imports

const CampaignComponent: React.FC = () => {
  const [campaignId, setCampaignId] = useState(1);
  const [points, setPoints] = useState(100);
  const [status, setStatus] = useState('');
  const [events, setEvents] = useState<string[]>([]);

  useEffect(() => {
    campaignService.listenForPointsAwarded((campaignId, user, points) => {
      setEvents((prev) => [...prev, `Campaign ${campaignId}: User ${user} awarded ${points} points`]);
    });
  }, []);

  // ... rest of the component
  return (
    <div>
      <h2>On-Chain Campaign</h2>
      <input
        type="number"
        value={campaignId}
        onChange={(e) => setCampaignId(Number(e.target.value))}
        placeholder="Campaign ID"
      />
      <input
        type="number"
        value={points}
        onChange={(e) => setPoints(Number(e.target.value))}
        placeholder="Points to Award"
      />
      <button onClick={handleAwardPoints}>Award Points</button>
      <p>{status}</p>
      <h3>Recent Awards</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
};
```

## Distributing Rewards

Distribute rewards (e.g., tokens or NFTs) based on accumulated points.

1. **Add Reward Distribution to Contract**

Update `campaign.cairo` to include a reward distribution function:

```cairo
// Function to distribute rewards
@external
func distribute_rewards{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    campaign_id: felt, user: felt, amount: Uint256
) {
    let (metadata) = campaign_metadata.read(campaign_id);
    assert metadata.active = 1; // Ensure campaign is active
    let (current_points) = campaign_points.read(user);
    assert current_points.low >= amount.low; // Ensure user has enough points
    let new_points = Uint256(current_points.low - amount.low, current_points.high - amount.high);
    campaign_points.write(user, new_points);
    // Logic to transfer tokens/NFTs (requires integration with a token contract)
    return ();
}
```

2. **Integrate Reward Distribution**

Add a method to `campaignService.ts`:

```typescript
async distributeRewards(campaignId: number, user: string, amount: number) {
  const call = this.contract.populate('distribute_rewards', {
    campaign_id: campaignId,
    user,
    amount: uint256.bnToUint256(amount),
  });
  const tx = await this.account.execute(call);
  await this.account.waitForTransaction(tx.transaction_hash);
  return tx;
}
```

3. **Update Frontend**

Add a reward distribution button to `CampaignComponent`:

```typescript
// ... inside CampaignComponent
const [userAddress, setUserAddress] = useState('');
const [rewardAmount, setRewardAmount] = useState(50);

const handleDistributeRewards = async () => {
  try {
    await campaignService.distributeRewards(campaignId, userAddress, rewardAmount);
    setStatus('Rewards distributed successfully!');
  } catch (error) {
    setStatus(`Error: ${error.message}`);
  }
};

// ... inside return
<input
  type="text"
  value={userAddress}
  onChange={(e) => setUserAddress(e.target.value)}
  placeholder="User Address"
/>
<input
  type="number"
  value={rewardAmount}
  onChange={(e) => setRewardAmount(Number(e.target.value))}
  placeholder="Reward Amount"
/>
<button onClick={handleDistributeRewards}>Distribute Rewards</button>
```

## Testing and Deployment

1. **Test Locally**

Run the Weaver client locally:

```bash
npm run start
```

Test the campaign functionality using a Starknet wallet connected to the Goerli testnet.

2. **Deploy to Production**

Deploy the contract to Starknet mainnet and update `CONTRACT_ADDRESS` in `campaignService.ts`. Ensure secure key management for the account’s private key.

## Best Practices

- **Security**: Use secure key management (e.g., environment variables or a vault) for private keys. Validate all inputs to prevent reentrancy or overflow attacks.
- **Gas Optimisation**: Minimise storage operations in the Cairo contract to reduce gas costs on Starknet.
- **User Experience**: Provide clear feedback in the UI for transaction status and errors. Use loading indicators during transaction confirmations.
- **Testing**: Write unit tests for the contract using Cairo’s testing framework and integration tests for the frontend using Jest.
- **Monitoring**: Use Starknet’s event system to monitor campaign activity and integrate with analytics tools for off-chain tracking.

## Resources

- [Starknet Documentation](https://www.starknet.io/docs/)
- [Starknet.js](https://www.starknet.io/docs/starknet-js/)
- [Weaver Client Repository](https://github.com/weaver-points/weaver-client)
- [Medium Article on Weaver Campaigns](https://medium.com/@samuonanikesamuel123/weaver-a-product-driven-approach-to-boosting-user-retention-with-on-chain-campaigns-on-starknet-95d5a982b551)
