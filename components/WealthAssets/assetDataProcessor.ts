import { WealthAsset } from '@/types/Asset';

/**
 * Example Asset Data Structure:
 * 
 * Raw Asset:
 * {
 *   assetId: '1',
 *   assetName: 'Checking Account',
 *   nickname: 'Main Checking',
 *   primaryAssetCategory: 'Cash',
 *   wealthAssetType: 'Bank Account',
 *   balanceCurrent: 5000.50
 * }
 * 
 * Processed Data Structure:
 * {
 *   grouped: {
 *     'Cash': {
 *       'Bank Account': [
 *         { assetId: '1', nickname: 'Main Checking', balanceCurrent: 5000.50, ... }
 *       ]
 *     }
 *   },
 *   categoryTotals: {
 *     'Cash': 20001.25,
 *     'Investment': 75000.25
 *   },
 *   subcategoryTotals: {
 *     'Cash': {
 *       'Bank Account': 20001.25
 *     }
 *   }
 * }
 */

export const CATEGORY_ORDER = ['Cash', 'Investment', 'Other Property', 'Real Estate'];

interface GroupedAssetData {
  grouped: Record<string, Record<string, WealthAsset[]>>;
  categoryTotals: Record<string, number>;
  subcategoryTotals: Record<string, Record<string, number>>;
}

export function groupAssets(assets: WealthAsset[]): GroupedAssetData {
  const grouped: Record<string, Record<string, WealthAsset[]>> = {};
  const categoryTotals: Record<string, number> = {};
  const subcategoryTotals: Record<string, Record<string, number>> = {};

  for (const asset of assets) {
    // get category for asset from primaryAssetCategory
    const category = asset.primaryAssetCategory || 'Uncategorized';
    // get subcategory for asset from wealthAssetType
    const subcategory = asset.wealthAssetType || 'Unspecified';

    // if category is not already in group, add it as empty object
    if (!grouped[category]) {
      grouped[category] = {};
      categoryTotals[category] = 0;
      subcategoryTotals[category] = {};
    }

    // if subcategory doesn't exist, add it as empty array
    if (!grouped[category][subcategory]) {
      grouped[category][subcategory] = [];
      subcategoryTotals[category][subcategory] = 0;
    }

    // add asset to subcategory
    grouped[category][subcategory].push(asset);

    // update totals
    categoryTotals[category] += asset.balanceCurrent;
    subcategoryTotals[category][subcategory] += asset.balanceCurrent;
  }

  return { grouped, categoryTotals, subcategoryTotals };
}

export function getSortedCategories(categories: string[]): string[] {
  return categories.sort((a, b) => {
    const indexA = CATEGORY_ORDER.indexOf(a);
    const indexB = CATEGORY_ORDER.indexOf(b);
    
    // If both categories are not in the order array, sort alphabetically
    if (indexA === -1 && indexB === -1) {
      return a.localeCompare(b);
    }
    // If only one category is not in the order array, put it at the end
    if (indexA === -1) {
      return 1;
    }
    if (indexB === -1) {
      return -1;
    }
    // Otherwise sort by the predefined order
    return indexA - indexB;
  });
}

// Notes on space-time complexity of this processing:
// My prompt: Perform a space time complexity analysis on the asset processing done in this file. 
// From first glance it looks like there is no nested for loops, so I expect at most linear space time. 
// There is the sort of categories, but there are only a few categories so that shouldn't take too long/dominate the complexities.

// Cursor's analysis:
// I'll analyze the space and time complexity for both main functions in this file: groupAssets and getSortedCategories.

// groupAssets Function:

// Time Complexity: O(n)
// The function has a single loop that iterates through each asset exactly once
// All operations inside the loop (object property access, assignments, arithmetic) are O(1)
// No nested loops are present
// Where n is the number of assets

// Space Complexity: O(n)
// Creates three objects: grouped, categoryTotals, and subcategoryTotals
// The grouped object will store references to all n assets, just organized differently
// The categoryTotals and subcategoryTotals objects will have at most k entries where k is the number of categories/subcategories
// Since k (number of categories) is fixed and small (as evidenced by CATEGORY_ORDER having only 4 categories), the space is dominated by storing the n assets
// Where n is the number of assets

// getSortedCategories Function:

// Time Complexity: O(k log k)
// The JavaScript .sort() method uses TimSort, which has O(n log n) complexity
// However, since we're only sorting categories, and k (number of categories) is small and fixed
// The indexOf operations inside the sort comparator are O(1) since CATEGORY_ORDER is a fixed small array
// The localeCompare operations are also effectively O(1) for short strings
// Where k is the number of categories (which is very small, ≤ 4 based on CATEGORY_ORDER)

// Space Complexity: O(k)
// Creates a new sorted array of category strings
// Where k is the number of categories (which is very small)

// Overall System Complexity:
// The dominant operation is groupAssets since it processes all assets
// Therefore, the overall system has:
// Time Complexity: O(n) where n is number of assets
// Space Complexity: O(n) where n is number of assets
// The category sorting operation, while technically O(k log k), doesn't dominate because k is very small (≤ 4 categories) and fixed, making its impact negligible compared to processing n assets.
// This is an efficient implementation for processing wealth assets, as it achieves the grouping and totaling operations with minimal overhead, using just a single pass through the data.

// You're correct in your assessment! The system maintains linear time and space complexity with respect to the number of assets. 
// The category sorting operation, while technically O(k log k), doesn't dominate because k is very small (≤ 4 categories) and fixed, making its impact negligible compared to processing n assets.
// This is an efficient implementation for processing wealth assets, as it achieves the grouping and totaling operations with minimal overhead, using just a single pass through the data.