// From Claude:
// I've created comprehensive TypeScript types for your wealth management asset data. Here's what I've included:
// Key Features:

// Detailed Interface Structure: The main WealthAsset interface captures all properties from your JSON data with proper typing.
// Asset-Specific Info Types: Separate interfaces for each asset type:

// ManualCashInfo - for cash assets
// ManualCryptocurrencyInfo - for crypto holdings
// ManualVehicleInfo - for vehicles
// ManualRealEstateInfo - for real estate properties
// ManualBrokerageInfo - for investment accounts


// Holdings Structure: Complex nested structure for asset allocation with major and minor asset classes.
// Type Safety: Strong typing for enums, dates (ISO strings), and nullable fields.
// Utility Types:

// ParsedAssetInfo<T> - conditional type for type-safe asset info parsing
// ParseAssetInfo - helper function type for parsing JSON strings

// Comprehensive Enums: All the different categories, asset types, and classification values from your data.

// The types handle the fact that assetInfo is stored as a JSON string in the main object, while providing proper typing for when you parse it. You can use these types to ensure type safety when working with this financial data structure.

// Base types for common properties
type AssetId = string;
type CognitoId = string;
type UserInstitutionId = string;
type WealthId = string;
type ISODateString = string;
type CurrencyCode = string;

// Enums for asset categories and types
type PrimaryAssetCategory = 'Cash' | 'Investment' | 'OtherProperty' | 'RealEstate';
type WealthAssetType = 'Cash' | 'Cryptocurrency' | 'Vehicle' | 'RealEstate' | 'Brokerage';
type AssetInfoType = 'ManualCash' | 'ManualCryptocurrency' | 'ManualVehicle' | 'ManualRealEstate' | 'ManualBrokerage';
type BalanceSource = 'UserManual' | 'Vendor';
type VendorResponseType = 'Other';
type MajorAssetClass = 'CashDepositsMoneyMarketFunds' | 'FixedIncome' | 'PublicEquity' | 'AlternativeInvestments' | 'OtherInvestments' | 'Liabilities';
type MinorAssetClass = 
  // Cash & Deposits
  'Cash' | 'DepositsMoneyMarketFunds' |
  // Fixed Income
  'InvestmentGradeFixedIncome' | 'HybridFixedIncome' | 'OtherFixedIncome' |
  // Equity
  'UsEquity' | 'NonUsEquity' | 'GlobalEquity' | 'IncomeOrientedEquity' | 'OtherEquity' |
  // Alternative Investments
  'PrivateEquity' | 'HedgeFunds' | 'RealEstate' | 'Commodities' | 'VentureCapital' | 'PersonalRealEstate' | 'Other' |
  // Other Investments
  'AssetAllocation' | 'Miscellaneous' |
  // Liabilities
  'CreditCard' | 'Loan' | 'IntraFamilyLoan' | 'OtherLiability' | 'ResidentialMortgages' | 'SecurityBasedLoans' | 'StructuredLoans';

// Asset class structure for holdings
interface AssetClass {
  minorAssetClass: MinorAssetClass;
  value: number;
}

interface MajorAssetClass {
  majorClass: MajorAssetClass;
  assetClasses: AssetClass[];
}

interface Holdings {
  majorAssetClasses: MajorAssetClass[];
}

// Asset info interfaces for different asset types
interface ManualCashInfo {
  nickname: string;
  descriptionEstatePlan: string;
  estimateValue: number;
  purchaseCost: number;
  asOfDate: ISODateString;
  isFavorite: boolean;
}

interface ManualCryptocurrencyInfo {
  slug: string;
  symbol: string;
  cryptocurrencyName: string;
  quantity: number;
  nickname: string;
  estimateValue: number;
  purchaseCost: number;
  asOfDate: ISODateString;
  isFavorite: boolean;
}

interface ManualVehicleInfo {
  manualAddType: number;
  modelYear: number;
  nickname: string;
  descriptionEstatePlan: string;
  estimateValue: number;
  purchaseCost: number;
  asOfDate: ISODateString;
  isFavorite: boolean;
}

interface ManualRealEstateInfo {
  streetAddress: string;
  streetAddress2: string;
  city: string;
  state: string;
  zipCode: string;
  countryCode: string;
  useZillow: boolean;
  neighborhood: string;
  nickname: string;
  descriptionEstatePlan: string;
  estimateValue: number;
  purchaseCost: number;
  purchaseDate: ISODateString;
  asOfDate: ISODateString;
  holdings: Holdings;
  isFavorite: boolean;
}

interface ManualBrokerageInfo {
  nickname: string;
  descriptionEstatePlan: string;
  estimateValue: number;
  purchaseCost: number;
  asOfDate: ISODateString;
  holdings: Holdings;
  isFavorite: boolean;
}

// Union type for all asset info types
type AssetInfo = ManualCashInfo | ManualCryptocurrencyInfo | ManualVehicleInfo | ManualRealEstateInfo | ManualBrokerageInfo;

// Main asset interface
interface WealthAsset {
  // Asset identification
  assetId: AssetId;
  assetDescription: string | null;
  assetInfo: string; // JSON string containing AssetInfo
  assetInfoType: AssetInfoType;
  assetMask: string | null;
  assetName: string | null;
  assetOwnerName: string | null;
  
  // Balance information
  balanceAsOf: ISODateString;
  balanceCostBasis: number;
  balanceCostFrom: BalanceSource;
  balanceCurrent: number;
  balanceFrom: BalanceSource;
  balancePrice: number | null;
  balancePriceFrom: BalanceSource;
  balanceQuantityCurrent: number | null;
  
  // Ownership and beneficiary information
  beneficiaryComposition: unknown | null; // Type unclear from data
  ownership: unknown | null; // Type unclear from data
  
  // User and institution information
  cognitoId: CognitoId;
  userInstitutionId: UserInstitutionId;
  wid: WealthId;
  institutionId: number;
  institutionName: string | null;
  
  // Dates
  creationDate: ISODateString;
  modificationDate: ISODateString;
  lastUpdate: ISODateString;
  lastUpdateAttempt: ISODateString;
  nextUpdate: ISODateString | null;
  deactivateBy: ISODateString | null;
  
  // Asset configuration
  currencyCode: CurrencyCode | null;
  descriptionEstatePlan: string;
  hasInvestment: boolean | null;
  holdings: Holdings | null;
  includeInNetWorth: boolean;
  isActive: boolean;
  isAsset: boolean;
  isFavorite: boolean;
  isLinkedVendor: boolean | null;
  
  // Display and branding
  logoName: string | null;
  nickname: string;
  note: string | null;
  noteDate: ISODateString | null;
  
  // Asset categorization
  primaryAssetCategory: PrimaryAssetCategory;
  wealthAssetType: WealthAssetType;
  
  // Status information
  status: string | null;
  statusCode: string | null;
  
  // Vendor integration
  integration: unknown | null; // Type unclear from data
  integrationAccountId: string | null;
  vendorAccountType: string | null;
  vendorContainer: string | null;
  vendorResponse: unknown | null; // Type unclear from data
  vendorResponseType: VendorResponseType;
}

// Array type for multiple assets
type WealthAssets = WealthAsset[];

// Utility types for working with parsed asset info
type ParsedAssetInfo<T extends AssetInfoType> = 
  T extends 'ManualCash' ? ManualCashInfo :
  T extends 'ManualCryptocurrency' ? ManualCryptocurrencyInfo :
  T extends 'ManualVehicle' ? ManualVehicleInfo :
  T extends 'ManualRealEstate' ? ManualRealEstateInfo :
  T extends 'ManualBrokerage' ? ManualBrokerageInfo :
  never;

// Helper function type for parsing asset info
type ParseAssetInfo = <T extends AssetInfoType>(
  assetInfoString: string,
  assetInfoType: T
) => ParsedAssetInfo<T>;

// Export all types
export type {
  WealthAsset,
  WealthAssets,
  AssetInfo,
  ManualCashInfo,
  ManualCryptocurrencyInfo,
  ManualVehicleInfo,
  ManualRealEstateInfo,
  ManualBrokerageInfo,
  Holdings,
  MajorAssetClass,
  AssetClass,
  PrimaryAssetCategory,
  WealthAssetType,
  AssetInfoType,
  BalanceSource,
  MajorAssetClass as MajorAssetClassName,
  MinorAssetClass,
  ParsedAssetInfo,
  ParseAssetInfo,
  AssetId,
  CognitoId,
  UserInstitutionId,
  WealthId,
  ISODateString,
  CurrencyCode
};