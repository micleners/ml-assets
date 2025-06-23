import { WealthAsset } from '@/types/Asset';

export const exampleAssets: WealthAsset[] = [
  {
    assetId: '1',
    assetName: 'Checking Account',
    nickname: 'Main Checking',
    primaryAssetCategory: 'Cash',
    wealthAssetType: 'Bank Account',
    balanceCurrent: 5000.50,
  },
  {
    assetId: '2',
    assetName: 'Savings Account',
    nickname: 'Emergency Fund',
    primaryAssetCategory: 'Cash',
    wealthAssetType: 'Bank Account',
    balanceCurrent: 15000.75,
  },
  {
    assetId: '3',
    assetName: 'Stock Portfolio',
    nickname: 'Growth Stocks',
    primaryAssetCategory: 'Investment',
    wealthAssetType: 'Stocks',
    balanceCurrent: 50000.25,
  },
  {
    assetId: '4',
    assetName: 'Bond Fund',
    nickname: 'Conservative Bonds',
    primaryAssetCategory: 'Investment',
    wealthAssetType: 'Bonds',
    balanceCurrent: 25000.00,
  },
  {
    assetId: '5',
    assetName: 'Rental Property',
    nickname: 'Beach House',
    primaryAssetCategory: 'Real Estate',
    wealthAssetType: 'Residential',
    balanceCurrent: 450000.00,
  },
  {
    assetId: '6',
    assetName: 'Commercial Space',
    nickname: 'Downtown Office',
    primaryAssetCategory: 'Real Estate',
    wealthAssetType: 'Commercial',
    balanceCurrent: 750000.00,
  },
  {
    assetId: '7',
    assetName: 'Vintage Car',
    nickname: '1967 Mustang',
    primaryAssetCategory: 'Other Property',
    wealthAssetType: 'Vehicles',
    balanceCurrent: 45000.00,
  },
  {
    assetId: '8',
    assetName: 'Art Collection',
    nickname: 'Modern Art Portfolio',
    primaryAssetCategory: 'Other Property',
    wealthAssetType: 'Collectibles',
    balanceCurrent: 75000.00,
  },
];

// Example of processed data structure after running through groupAssets
export const exampleProcessedData = {
  grouped: {
    'Cash': {
      'Bank Account': [
        {
          assetId: '1',
          assetName: 'Checking Account',
          nickname: 'Main Checking',
          primaryAssetCategory: 'Cash',
          wealthAssetType: 'Bank Account',
          balanceCurrent: 5000.50,
        },
        {
          assetId: '2',
          assetName: 'Savings Account',
          nickname: 'Emergency Fund',
          primaryAssetCategory: 'Cash',
          wealthAssetType: 'Bank Account',
          balanceCurrent: 15000.75,
        },
      ],
    },
    'Investment': {
      'Stocks': [
        {
          assetId: '3',
          assetName: 'Stock Portfolio',
          nickname: 'Growth Stocks',
          primaryAssetCategory: 'Investment',
          wealthAssetType: 'Stocks',
          balanceCurrent: 50000.25,
        },
      ],
      'Bonds': [
        {
          assetId: '4',
          assetName: 'Bond Fund',
          nickname: 'Conservative Bonds',
          primaryAssetCategory: 'Investment',
          wealthAssetType: 'Bonds',
          balanceCurrent: 25000.00,
        },
      ],
    },
    'Real Estate': {
      'Residential': [
        {
          assetId: '5',
          assetName: 'Rental Property',
          nickname: 'Beach House',
          primaryAssetCategory: 'Real Estate',
          wealthAssetType: 'Residential',
          balanceCurrent: 450000.00,
        },
      ],
      'Commercial': [
        {
          assetId: '6',
          assetName: 'Commercial Space',
          nickname: 'Downtown Office',
          primaryAssetCategory: 'Real Estate',
          wealthAssetType: 'Commercial',
          balanceCurrent: 750000.00,
        },
      ],
    },
    'Other Property': {
      'Vehicles': [
        {
          assetId: '7',
          assetName: 'Vintage Car',
          nickname: '1967 Mustang',
          primaryAssetCategory: 'Other Property',
          wealthAssetType: 'Vehicles',
          balanceCurrent: 45000.00,
        },
      ],
      'Collectibles': [
        {
          assetId: '8',
          assetName: 'Art Collection',
          nickname: 'Modern Art Portfolio',
          primaryAssetCategory: 'Other Property',
          wealthAssetType: 'Collectibles',
          balanceCurrent: 75000.00,
        },
      ],
    },
  },
  categoryTotals: {
    'Cash': 20001.25,
    'Investment': 75000.25,
    'Real Estate': 1200000.00,
    'Other Property': 120000.00,
  },
  subcategoryTotals: {
    'Cash': {
      'Bank Account': 20001.25,
    },
    'Investment': {
      'Stocks': 50000.25,
      'Bonds': 25000.00,
    },
    'Real Estate': {
      'Residential': 450000.00,
      'Commercial': 750000.00,
    },
    'Other Property': {
      'Vehicles': 45000.00,
      'Collectibles': 75000.00,
    },
  },
}; 