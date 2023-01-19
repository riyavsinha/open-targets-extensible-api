import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Long: any;
};

/** This element represents the tag variant with its associated statistics */
export type CredSetTagElement = {
  __typename?: 'CredSetTagElement';
  /** Multisignal Method */
  MultisignalMethod: Scalars['String'];
  /** beta */
  beta: Scalars['Float'];
  /** Is over 95 percentile */
  is95: Scalars['Boolean'];
  /** Is over 99 percentile */
  is99: Scalars['Boolean'];
  /** Log ABF */
  logABF: Scalars['Float'];
  /** Posterior Probability */
  postProb: Scalars['Float'];
  /** p-val */
  pval: Scalars['Float'];
  /** SE */
  se: Scalars['Float'];
  /** Tag Variant in the credibleset table */
  tagVariant: Variant;
};

/** A list of rows with each link */
export type DistanceElement = {
  __typename?: 'DistanceElement';
  aggregatedScore: Scalars['Float'];
  sourceId: Scalars['String'];
  tissues: Array<DistanceTissue>;
  typeId: Scalars['String'];
};

export type DistanceTissue = {
  __typename?: 'DistanceTissue';
  /** Distance to the canonical TSS */
  distance?: Maybe<Scalars['Long']>;
  /** Quantile of the score */
  quantile?: Maybe<Scalars['Float']>;
  /** Score 1 / Distance */
  score?: Maybe<Scalars['Float']>;
  tissue: Tissue;
};

export type FPredTissue = {
  __typename?: 'FPredTissue';
  maxEffectLabel?: Maybe<Scalars['String']>;
  maxEffectScore?: Maybe<Scalars['Float']>;
  tissue: Tissue;
};

/** A list of rows with each link */
export type FunctionalPredictionElement = {
  __typename?: 'FunctionalPredictionElement';
  aggregatedScore: Scalars['Float'];
  sourceId: Scalars['String'];
  tissues: Array<FPredTissue>;
  typeId: Scalars['String'];
};

/** A list of rows with each link */
export type G2VSchema = {
  __typename?: 'G2VSchema';
  /** Distance structure definition */
  distances: Array<G2VSchemaElement>;
  /** qtl structure definition */
  functionalPredictions: Array<G2VSchemaElement>;
  /** qtl structure definition */
  intervals: Array<G2VSchemaElement>;
  /** qtl structure definition */
  qtls: Array<G2VSchemaElement>;
};

/** A list of rows with each link */
export type G2VSchemaElement = {
  __typename?: 'G2VSchemaElement';
  id: Scalars['String'];
  /** PubmedID */
  pmid?: Maybe<Scalars['String']>;
  sourceDescriptionBreakdown?: Maybe<Scalars['String']>;
  sourceDescriptionOverview?: Maybe<Scalars['String']>;
  sourceId: Scalars['String'];
  sourceLabel?: Maybe<Scalars['String']>;
  tissues: Array<Tissue>;
};

export type GwasColocalisation = {
  __typename?: 'GWASColocalisation';
  /** Beta */
  beta?: Maybe<Scalars['Float']>;
  /** H3 */
  h3: Scalars['Float'];
  /** H4 */
  h4: Scalars['Float'];
  /** Tag variant ID as ex. 1_12345_A_T */
  indexVariant: Variant;
  /** Log2 H4/H3 */
  log2h4h3: Scalars['Float'];
  /** study ID */
  study: Study;
};

export type GwasColocalisationForQtlWithGene = {
  __typename?: 'GWASColocalisationForQTLWithGene';
  /** H3 */
  h3: Scalars['Float'];
  /** H4 */
  h4: Scalars['Float'];
  /** Tag variant ID as ex. 1_12345_A_T */
  leftVariant: Variant;
  /** Log2 H4/H3 */
  log2h4h3: Scalars['Float'];
  /** Phenotype ID */
  phenotypeId: Scalars['String'];
  /** QTL study ID */
  qtlStudyId: Scalars['String'];
  /** GWAS Study */
  study: Study;
  /** QTL bio-feature */
  tissue: Tissue;
};

export type GwaslrColocalisation = {
  __typename?: 'GWASLRColocalisation';
  /** H3 */
  h3: Scalars['Float'];
  /** H4 */
  h4: Scalars['Float'];
  /** study ID */
  leftStudy: Study;
  /** Tag variant ID as ex. 1_12345_A_T */
  leftVariant: Variant;
  /** Log2 H4/H3 */
  log2h4h3: Scalars['Float'];
  /** study ID */
  rightStudy: Study;
  /** Tag variant ID as ex. 1_12345_A_T */
  rightVariant: Variant;
};

export type Gecko = {
  __typename?: 'Gecko';
  geneTagVariants: Array<GeneTagVariant>;
  genes: Array<Gene>;
  indexVariants: Array<Variant>;
  studies: Array<Study>;
  tagVariantIndexVariantStudies: Array<TagVariantIndexVariantStudy>;
  tagVariants: Array<Variant>;
};

export type Gene = {
  __typename?: 'Gene';
  bioType?: Maybe<Scalars['String']>;
  chromosome?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['Long']>;
  exons: Array<Scalars['Long']>;
  fwdStrand?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  start?: Maybe<Scalars['Long']>;
  symbol?: Maybe<Scalars['String']>;
  tss?: Maybe<Scalars['Long']>;
};

/** A list of rows with each link */
export type GeneForVariant = {
  __typename?: 'GeneForVariant';
  distances: Array<DistanceElement>;
  functionalPredictions: Array<FunctionalPredictionElement>;
  /** Associated scored gene */
  gene: Gene;
  intervals: Array<IntervalElement>;
  overallScore: Scalars['Float'];
  qtls: Array<QtlElement>;
  /** Associated scored variant */
  variant: Scalars['String'];
};

export type GeneTagVariant = {
  __typename?: 'GeneTagVariant';
  geneId: Scalars['String'];
  overallScore: Scalars['Float'];
  tagVariantId: Scalars['String'];
};

/** This object represent a link between a triple (study, trait, index_variant) and a tag variant via an expansion method (either ldExpansion or FineMapping) */
export type IndexVariantAssociation = {
  __typename?: 'IndexVariantAssociation';
  afr1000GProp?: Maybe<Scalars['Float']>;
  amr1000GProp?: Maybe<Scalars['Float']>;
  beta?: Maybe<Scalars['Float']>;
  betaCILower?: Maybe<Scalars['Float']>;
  betaCIUpper?: Maybe<Scalars['Float']>;
  direction?: Maybe<Scalars['String']>;
  eas1000GProp?: Maybe<Scalars['Float']>;
  eur1000GProp?: Maybe<Scalars['Float']>;
  log10Abf?: Maybe<Scalars['Float']>;
  /** n cases */
  nCases: Scalars['Long'];
  /** n total cases (n initial + n replication) */
  nTotal: Scalars['Long'];
  oddsRatio?: Maybe<Scalars['Float']>;
  oddsRatioCILower?: Maybe<Scalars['Float']>;
  oddsRatioCIUpper?: Maybe<Scalars['Float']>;
  /** study ID */
  overallR2?: Maybe<Scalars['Float']>;
  posteriorProbability?: Maybe<Scalars['Float']>;
  /** p-val between a study and an the provided index variant */
  pval: Scalars['Float'];
  /** p-val between a study and an the provided index variant */
  pvalExponent: Scalars['Long'];
  /** p-val between a study and an the provided index variant */
  pvalMantissa: Scalars['Float'];
  sas1000GProp?: Maybe<Scalars['Float']>;
  /** study ID */
  study: Study;
  /** Tag variant ID as ex. 1_12345_A_T */
  tagVariant: Variant;
};

/** A list of rows with each link */
export type IndexVariantsAndStudiesForTagVariant = {
  __typename?: 'IndexVariantsAndStudiesForTagVariant';
  /** A list of associations connected to a Index variant and a Study through some expansion methods */
  associations: Array<TagVariantAssociation>;
};

/** A list of rows with each link */
export type IntervalElement = {
  __typename?: 'IntervalElement';
  aggregatedScore: Scalars['Float'];
  sourceId: Scalars['String'];
  tissues: Array<IntervalTissue>;
  typeId: Scalars['String'];
};

export type IntervalTissue = {
  __typename?: 'IntervalTissue';
  quantile: Scalars['Float'];
  score?: Maybe<Scalars['Float']>;
  tissue: Tissue;
};

/** This element represents a Manhattan like plot */
export type Manhattan = {
  __typename?: 'Manhattan';
  /** A list of associations */
  associations: Array<ManhattanAssociation>;
  /** A list of overlapped studies */
  topOverlappedStudies?: Maybe<TopOverlappedStudies>;
};


/** This element represents a Manhattan like plot */
export type ManhattanTopOverlappedStudiesArgs = {
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ManhattanAssociation = {
  __typename?: 'ManhattanAssociation';
  /** A list of best genes associated */
  bestColocGenes: Array<ScoredGene>;
  /** A list of best genes associated */
  bestGenes: Array<ScoredGene>;
  /** A list of best L2G scored genes associated */
  bestLocus2Genes: Array<ScoredGene>;
  beta?: Maybe<Scalars['Float']>;
  betaCILower?: Maybe<Scalars['Float']>;
  betaCIUpper?: Maybe<Scalars['Float']>;
  /** The cardinal of the set defined as tag variants for an index variant coming from crediblesets */
  credibleSetSize?: Maybe<Scalars['Long']>;
  direction?: Maybe<Scalars['String']>;
  /** The cardinal of the set defined as tag variants for an index variant coming from ld expansion */
  ldSetSize?: Maybe<Scalars['Long']>;
  oddsRatio?: Maybe<Scalars['Float']>;
  oddsRatioCILower?: Maybe<Scalars['Float']>;
  oddsRatioCIUpper?: Maybe<Scalars['Float']>;
  /** Computed p-Value */
  pval: Scalars['Float'];
  pvalExponent: Scalars['Long'];
  pvalMantissa: Scalars['Float'];
  /** The cardinal of the set defined as tag variants for an index variant coming from any expansion */
  totalSetSize: Scalars['Long'];
  /** Index variant */
  variant: Variant;
};

export type Metadata = {
  __typename?: 'Metadata';
  apiVersion: Version;
  dataVersion: Version;
  name: Scalars['String'];
};

export type NewEntityRelatedToVariant = {
  __typename?: 'NewEntityRelatedToVariant';
  id: Scalars['ID'];
  newProperty: Scalars['String'];
};

/** This element represents an overlap between two variants for two studies */
export type Overlap = {
  __typename?: 'Overlap';
  distinctA: Scalars['Long'];
  distinctB: Scalars['Long'];
  overlapAB: Scalars['Long'];
  variantIdA: Scalars['String'];
  variantIdB: Scalars['String'];
};

export type OverlappedInfoForStudy = {
  __typename?: 'OverlappedInfoForStudy';
  overlappedVariantsForStudies: Array<OverlappedVariantsStudies>;
  /** A study object */
  study?: Maybe<Study>;
  variantIntersectionSet: Array<Scalars['String']>;
};

/** This element represent a overlap between two stduies */
export type OverlappedStudy = {
  __typename?: 'OverlappedStudy';
  /** Orig variant id which is been used for computing the overlap with the referenced study */
  numOverlapLoci: Scalars['Int'];
  /** A study object */
  study?: Maybe<Study>;
  /** A study object */
  studyId: Scalars['String'];
};

/** This element represents an overlap between two studies */
export type OverlappedVariantsStudies = {
  __typename?: 'OverlappedVariantsStudies';
  /** Orig variant id which is been used for computing the overlap with the referenced study */
  overlaps: Array<Overlap>;
  /** A study object */
  study?: Maybe<Study>;
};

export type Pagination = {
  index: Scalars['Int'];
  size: Scalars['Int'];
};

/** This element represents a PheWAS like plot */
export type PheWas = {
  __typename?: 'PheWAS';
  /** A list of associations */
  associations: Array<PheWasAssociation>;
  /** A total number of unique GWAS studies in the summary stats table */
  totalGWASStudies: Scalars['Long'];
};

/** This element represents an association between a variant and a reported trait through a study */
export type PheWasAssociation = {
  __typename?: 'PheWASAssociation';
  beta?: Maybe<Scalars['Float']>;
  /** Effect Allele Frequency */
  eaf?: Maybe<Scalars['Float']>;
  nCases?: Maybe<Scalars['Long']>;
  /** Total sample size (variant level) */
  nTotal?: Maybe<Scalars['Long']>;
  /** Odds ratio (if case control) */
  oddsRatio?: Maybe<Scalars['Float']>;
  /** Computed p-Value */
  pval: Scalars['Float'];
  /** Standard error */
  se?: Maybe<Scalars['Float']>;
  /** Study Object */
  study?: Maybe<Study>;
  studyId: Scalars['String'];
};

export type QtlColocalisation = {
  __typename?: 'QTLColocalisation';
  /** Beta */
  beta?: Maybe<Scalars['Float']>;
  /** Gene */
  gene: Gene;
  /** H3 */
  h3: Scalars['Float'];
  /** H4 */
  h4: Scalars['Float'];
  /** Tag variant ID as ex. 1_12345_A_T */
  indexVariant: Variant;
  /** Log2 H4/H3 */
  log2h4h3: Scalars['Float'];
  /** QTL Phenotype ID */
  phenotypeId: Scalars['String'];
  /** QTL study ID */
  qtlStudyName: Scalars['String'];
  /** QTL bio-feature */
  tissue: Tissue;
};

/** A list of rows with each link */
export type QtlElement = {
  __typename?: 'QTLElement';
  aggregatedScore: Scalars['Float'];
  sourceId: Scalars['String'];
  tissues: Array<QtlTissue>;
  typeId: Scalars['String'];
};

export type QtlTissue = {
  __typename?: 'QTLTissue';
  beta?: Maybe<Scalars['Float']>;
  pval?: Maybe<Scalars['Float']>;
  quantile: Scalars['Float'];
  tissue: Tissue;
};

export type Query = {
  __typename?: 'Query';
  colocalisationsForGene: Array<GwasColocalisationForQtlWithGene>;
  gecko?: Maybe<Gecko>;
  geneInfo?: Maybe<Gene>;
  genes: Array<Gene>;
  genesForVariant: Array<GeneForVariant>;
  genesForVariantSchema: G2VSchema;
  gwasColocalisation: Array<GwasColocalisation>;
  gwasColocalisationForRegion: Array<GwaslrColocalisation>;
  gwasCredibleSet: Array<CredSetTagElement>;
  gwasRegional: Array<RegionalAssociation>;
  indexVariantsAndStudiesForTagVariant: IndexVariantsAndStudiesForTagVariant;
  manhattan: Manhattan;
  /** Return Open Targets Genetics API metadata */
  meta: Metadata;
  overlapInfoForStudy: OverlappedInfoForStudy;
  pheWAS: PheWas;
  qtlColocalisation: Array<QtlColocalisation>;
  qtlCredibleSet: Array<CredSetTagElement>;
  qtlRegional: Array<RegionalAssociation>;
  regionPlot?: Maybe<Gecko>;
  search: SearchResult;
  studiesAndLeadVariantsForGene: Array<StudiesAndLeadVariantsForGene>;
  studiesAndLeadVariantsForGeneByL2G: Array<V2Dl2GRowByGene>;
  studiesForGene: Array<StudyForGene>;
  studyAndLeadVariantInfo?: Maybe<StudiesAndLeadVariantsForGene>;
  studyInfo?: Maybe<Study>;
  studyLocus2GeneTable: SlgTable;
  tagVariantsAndStudiesForIndexVariant: TagVariantsAndStudiesForIndexVariant;
  topOverlappedStudies: TopOverlappedStudies;
  variantInfo?: Maybe<Variant>;
};


export type QueryColocalisationsForGeneArgs = {
  geneId: Scalars['String'];
};


export type QueryGeckoArgs = {
  chromosome: Scalars['String'];
  end: Scalars['Long'];
  start: Scalars['Long'];
};


export type QueryGeneInfoArgs = {
  geneId: Scalars['String'];
};


export type QueryGenesArgs = {
  chromosome: Scalars['String'];
  end: Scalars['Long'];
  start: Scalars['Long'];
};


export type QueryGenesForVariantArgs = {
  variantId: Scalars['String'];
};


export type QueryGwasColocalisationArgs = {
  studyId: Scalars['String'];
  variantId: Scalars['String'];
};


export type QueryGwasColocalisationForRegionArgs = {
  chromosome: Scalars['String'];
  end: Scalars['Long'];
  start: Scalars['Long'];
};


export type QueryGwasCredibleSetArgs = {
  studyId: Scalars['String'];
  variantId: Scalars['String'];
};


export type QueryGwasRegionalArgs = {
  chromosome: Scalars['String'];
  end: Scalars['Long'];
  start: Scalars['Long'];
  studyId: Scalars['String'];
};


export type QueryIndexVariantsAndStudiesForTagVariantArgs = {
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  variantId: Scalars['String'];
};


export type QueryManhattanArgs = {
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  studyId: Scalars['String'];
};


export type QueryOverlapInfoForStudyArgs = {
  studyId: Scalars['String'];
  studyIds: Array<Scalars['String']>;
};


export type QueryPheWasArgs = {
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  variantId: Scalars['String'];
};


export type QueryQtlColocalisationArgs = {
  studyId: Scalars['String'];
  variantId: Scalars['String'];
};


export type QueryQtlCredibleSetArgs = {
  bioFeature: Scalars['String'];
  geneId: Scalars['String'];
  studyId: Scalars['String'];
  variantId: Scalars['String'];
};


export type QueryQtlRegionalArgs = {
  bioFeature: Scalars['String'];
  chromosome: Scalars['String'];
  end: Scalars['Long'];
  geneId: Scalars['String'];
  start: Scalars['Long'];
  studyId: Scalars['String'];
};


export type QueryRegionPlotArgs = {
  optionalGeneId?: InputMaybe<Scalars['String']>;
  optionalStudyId?: InputMaybe<Scalars['String']>;
  optionalVariantId?: InputMaybe<Scalars['String']>;
};


export type QuerySearchArgs = {
  page?: InputMaybe<Pagination>;
  queryString: Scalars['String'];
};


export type QueryStudiesAndLeadVariantsForGeneArgs = {
  geneId: Scalars['String'];
};


export type QueryStudiesAndLeadVariantsForGeneByL2GArgs = {
  geneId: Scalars['String'];
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryStudiesForGeneArgs = {
  geneId: Scalars['String'];
};


export type QueryStudyAndLeadVariantInfoArgs = {
  studyId: Scalars['String'];
  variantId: Scalars['String'];
};


export type QueryStudyInfoArgs = {
  studyId: Scalars['String'];
};


export type QueryStudyLocus2GeneTableArgs = {
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  studyId: Scalars['String'];
  variantId: Scalars['String'];
};


export type QueryTagVariantsAndStudiesForIndexVariantArgs = {
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  variantId: Scalars['String'];
};


export type QueryTopOverlappedStudiesArgs = {
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  studyId: Scalars['String'];
};


export type QueryVariantInfoArgs = {
  id: Scalars['ID'];
};

/** Variant with a p-val */
export type RegionalAssociation = {
  __typename?: 'RegionalAssociation';
  /** p-val */
  pval: Scalars['Float'];
  /** Summary Stats simple variant information */
  variant: Variant;
};

export type SlgRow = {
  __typename?: 'SLGRow';
  distanceToLocus: Scalars['Long'];
  /** Gene */
  gene: Gene;
  hasColoc: Scalars['Boolean'];
  yProbaDistance: Scalars['Float'];
  yProbaInteraction: Scalars['Float'];
  yProbaModel: Scalars['Float'];
  yProbaMolecularQTL: Scalars['Float'];
  yProbaPathogenicity: Scalars['Float'];
};

export type SlgTable = {
  __typename?: 'SLGTable';
  rows: Array<SlgRow>;
  /** Study */
  study?: Maybe<Study>;
  /** Variant */
  variant?: Maybe<Variant>;
};

/** This object link a Gene with a score */
export type ScoredGene = {
  __typename?: 'ScoredGene';
  /** Gene Info */
  gene: Gene;
  /** Score a Float number between [0. .. 1.] */
  score: Scalars['Float'];
};

/** Search data by a query string */
export type SearchResult = {
  __typename?: 'SearchResult';
  /** Gene search result list */
  genes: Array<Gene>;
  /** Study search result list */
  studies: Array<Study>;
  /** Total number of genes found */
  totalGenes: Scalars['Long'];
  /** Total number of studies found */
  totalStudies: Scalars['Long'];
  /** Total number of variants found */
  totalVariants: Scalars['Long'];
  /** Variant search result list */
  variants: Array<Variant>;
};

/** A list of Studies and Lead Variants for a Gene */
export type StudiesAndLeadVariantsForGene = {
  __typename?: 'StudiesAndLeadVariantsForGene';
  beta?: Maybe<Scalars['Float']>;
  betaCILower?: Maybe<Scalars['Float']>;
  betaCIUpper?: Maybe<Scalars['Float']>;
  direction?: Maybe<Scalars['String']>;
  /** Tag variant ID as ex. 1_12345_A_T */
  indexVariant: Variant;
  oddsRatio?: Maybe<Scalars['Float']>;
  oddsRatioCILower?: Maybe<Scalars['Float']>;
  oddsRatioCIUpper?: Maybe<Scalars['Float']>;
  /** p-val between a study and an the provided index variant */
  pval: Scalars['Float'];
  /** p-val between a study and an the provided index variant */
  pvalExponent: Scalars['Long'];
  /** p-val between a study and an the provided index variant */
  pvalMantissa: Scalars['Float'];
  /** study ID */
  study: Study;
};

export type Study = {
  __typename?: 'Study';
  ancestryInitial: Array<Scalars['String']>;
  ancestryReplication: Array<Scalars['String']>;
  /** Contains summary statistical information */
  hasSumstats?: Maybe<Scalars['Boolean']>;
  nCases?: Maybe<Scalars['Long']>;
  nInitial?: Maybe<Scalars['Long']>;
  nReplication?: Maybe<Scalars['Long']>;
  /** n total cases (n initial + n replication) */
  nTotal: Scalars['Long'];
  numAssocLoci?: Maybe<Scalars['Long']>;
  /** PubMed ID for the corresponding publication */
  pmid?: Maybe<Scalars['String']>;
  pubAuthor?: Maybe<Scalars['String']>;
  /** Publication Date as YYYY-MM-DD */
  pubDate?: Maybe<Scalars['String']>;
  /** Publication Journal name */
  pubJournal?: Maybe<Scalars['String']>;
  pubTitle?: Maybe<Scalars['String']>;
  /** Database or BioBank providing the study */
  source?: Maybe<Scalars['String']>;
  studyId: Scalars['String'];
  traitCategory?: Maybe<Scalars['String']>;
  /** A list of curated efo codes */
  traitEfos: Array<Scalars['String']>;
  /** Trait Label as reported on the publication */
  traitReported: Scalars['String'];
};

export type StudyForGene = {
  __typename?: 'StudyForGene';
  /** A study object */
  study: Study;
};

/** This object represent a link between a triple (study, trait, index_variant) and a tag variant via an expansion method (either ldExpansion or FineMapping) */
export type TagVariantAssociation = {
  __typename?: 'TagVariantAssociation';
  afr1000GProp?: Maybe<Scalars['Float']>;
  amr1000GProp?: Maybe<Scalars['Float']>;
  beta?: Maybe<Scalars['Float']>;
  betaCILower?: Maybe<Scalars['Float']>;
  betaCIUpper?: Maybe<Scalars['Float']>;
  direction?: Maybe<Scalars['String']>;
  eas1000GProp?: Maybe<Scalars['Float']>;
  eur1000GProp?: Maybe<Scalars['Float']>;
  /** Tag variant ID as ex. 1_12345_A_T */
  indexVariant: Variant;
  log10Abf?: Maybe<Scalars['Float']>;
  /** n cases */
  nCases: Scalars['Long'];
  /** n total cases (n initial + n replication) */
  nTotal: Scalars['Long'];
  oddsRatio?: Maybe<Scalars['Float']>;
  oddsRatioCILower?: Maybe<Scalars['Float']>;
  oddsRatioCIUpper?: Maybe<Scalars['Float']>;
  /** study ID */
  overallR2?: Maybe<Scalars['Float']>;
  posteriorProbability?: Maybe<Scalars['Float']>;
  /** p-val between a study and an the provided index variant */
  pval: Scalars['Float'];
  /** p-val between a study and an the provided index variant */
  pvalExponent: Scalars['Long'];
  /** p-val between a study and an the provided index variant */
  pvalMantissa: Scalars['Float'];
  sas1000GProp?: Maybe<Scalars['Float']>;
  /** study ID */
  study: Study;
};

export type TagVariantIndexVariantStudy = {
  __typename?: 'TagVariantIndexVariantStudy';
  beta?: Maybe<Scalars['Float']>;
  betaCILower?: Maybe<Scalars['Float']>;
  betaCIUpper?: Maybe<Scalars['Float']>;
  direction?: Maybe<Scalars['String']>;
  indexVariantId: Scalars['String'];
  oddsRatio?: Maybe<Scalars['Float']>;
  oddsRatioCILower?: Maybe<Scalars['Float']>;
  oddsRatioCIUpper?: Maybe<Scalars['Float']>;
  posteriorProbability?: Maybe<Scalars['Float']>;
  pval: Scalars['Float'];
  /** p-val between a study and an the provided index variant */
  pvalExponent: Scalars['Long'];
  /** p-val between a study and an the provided index variant */
  pvalMantissa: Scalars['Float'];
  r2?: Maybe<Scalars['Float']>;
  studyId: Scalars['String'];
  tagVariantId: Scalars['String'];
};

/** A list of rows with each link */
export type TagVariantsAndStudiesForIndexVariant = {
  __typename?: 'TagVariantsAndStudiesForIndexVariant';
  /** A list of associations connected to a Index variant and a Study through some expansion methods */
  associations: Array<IndexVariantAssociation>;
};

export type Tissue = {
  __typename?: 'Tissue';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** This element represent a overlap between two stduies */
export type TopOverlappedStudies = {
  __typename?: 'TopOverlappedStudies';
  /** A study object */
  study?: Maybe<Study>;
  /** Top N studies ordered by loci overlap */
  topStudiesByLociOverlap: Array<OverlappedStudy>;
};

export type V2DBeta = {
  __typename?: 'V2DBeta';
  betaCI?: Maybe<Scalars['Float']>;
  betaCILower?: Maybe<Scalars['Float']>;
  betaCIUpper?: Maybe<Scalars['Float']>;
  direction?: Maybe<Scalars['String']>;
};

export type V2Dl2GRowByGene = {
  __typename?: 'V2DL2GRowByGene';
  beta: V2DBeta;
  odds: V2DOdds;
  pval: Scalars['Float'];
  pvalExponent: Scalars['Long'];
  pvalMantissa: Scalars['Float'];
  /** Study */
  study: Study;
  /** Variant */
  variant: Variant;
  yProbaDistance: Scalars['Float'];
  yProbaInteraction: Scalars['Float'];
  yProbaModel: Scalars['Float'];
  yProbaMolecularQTL: Scalars['Float'];
  yProbaPathogenicity: Scalars['Float'];
};

export type V2DOdds = {
  __typename?: 'V2DOdds';
  oddsCI?: Maybe<Scalars['Float']>;
  oddsCILower?: Maybe<Scalars['Float']>;
  oddsCIUpper?: Maybe<Scalars['Float']>;
};

export type Variant = {
  __typename?: 'Variant';
  altAllele: Scalars['String'];
  /** Combined Annotation Dependent Depletion - Scaled score */
  caddPhred?: Maybe<Scalars['Float']>;
  /** Combined Annotation Dependent Depletion - Raw score */
  caddRaw?: Maybe<Scalars['Float']>;
  /** Ensembl Gene ID of a gene */
  chromosome: Scalars['String'];
  /** chrom ID GRCH37 */
  chromosomeB37?: Maybe<Scalars['String']>;
  /** gnomAD Allele frequency (African/African-American population) */
  gnomadAFR?: Maybe<Scalars['Float']>;
  /** gnomAD Allele frequency (Latino/Admixed American population) */
  gnomadAMR?: Maybe<Scalars['Float']>;
  /** gnomAD Allele frequency (Ashkenazi Jewish population) */
  gnomadASJ?: Maybe<Scalars['Float']>;
  /** gnomAD Allele frequency (East Asian population) */
  gnomadEAS?: Maybe<Scalars['Float']>;
  /** gnomAD Allele frequency (Finnish population) */
  gnomadFIN?: Maybe<Scalars['Float']>;
  /** gnomAD Allele frequency (Non-Finnish European population) */
  gnomadNFE?: Maybe<Scalars['Float']>;
  /** gnomAD Allele frequency (Non-Finnish Eurpoean Estonian sub-population) */
  gnomadNFEEST?: Maybe<Scalars['Float']>;
  /** gnomAD Allele frequency (Non-Finnish Eurpoean North-Western European sub-population) */
  gnomadNFENWE?: Maybe<Scalars['Float']>;
  /** gnomAD Allele frequency (Non-Finnish Eurpoean Other non-Finnish European sub-population) */
  gnomadNFEONF?: Maybe<Scalars['Float']>;
  /** gnomAD Allele frequency (Non-Finnish Eurpoean Southern European sub-population) */
  gnomadNFESEU?: Maybe<Scalars['Float']>;
  /** gnomAD Allele frequency (Other (population not assigned) population) */
  gnomadOTH?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  /** Most severe consequence */
  mostSevereConsequence?: Maybe<Scalars['String']>;
  /** Nearest protein-coding gene */
  nearestCodingGene?: Maybe<Gene>;
  /** Distance to the nearest gene (protein-coding biotype) */
  nearestCodingGeneDistance?: Maybe<Scalars['Long']>;
  /** Nearest gene */
  nearestGene?: Maybe<Gene>;
  /** Distance to the nearest gene (any biotype) */
  nearestGeneDistance?: Maybe<Scalars['Long']>;
  newEntities: Array<NewEntityRelatedToVariant>;
  /** Approved symbol name of a gene */
  position: Scalars['Long'];
  /** Approved symbol name of a gene */
  positionB37?: Maybe<Scalars['Long']>;
  refAllele: Scalars['String'];
  /** Approved symbol name of a gene */
  rsId?: Maybe<Scalars['String']>;
};

export type Version = {
  __typename?: 'Version';
  major: Scalars['Int'];
  minor: Scalars['Int'];
  patch: Scalars['Int'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CredSetTagElement: ResolverTypeWrapper<CredSetTagElement>;
  DistanceElement: ResolverTypeWrapper<DistanceElement>;
  DistanceTissue: ResolverTypeWrapper<DistanceTissue>;
  FPredTissue: ResolverTypeWrapper<FPredTissue>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  FunctionalPredictionElement: ResolverTypeWrapper<FunctionalPredictionElement>;
  G2VSchema: ResolverTypeWrapper<G2VSchema>;
  G2VSchemaElement: ResolverTypeWrapper<G2VSchemaElement>;
  GWASColocalisation: ResolverTypeWrapper<GwasColocalisation>;
  GWASColocalisationForQTLWithGene: ResolverTypeWrapper<GwasColocalisationForQtlWithGene>;
  GWASLRColocalisation: ResolverTypeWrapper<GwaslrColocalisation>;
  Gecko: ResolverTypeWrapper<Gecko>;
  Gene: ResolverTypeWrapper<Gene>;
  GeneForVariant: ResolverTypeWrapper<GeneForVariant>;
  GeneTagVariant: ResolverTypeWrapper<GeneTagVariant>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IndexVariantAssociation: ResolverTypeWrapper<IndexVariantAssociation>;
  IndexVariantsAndStudiesForTagVariant: ResolverTypeWrapper<IndexVariantsAndStudiesForTagVariant>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IntervalElement: ResolverTypeWrapper<IntervalElement>;
  IntervalTissue: ResolverTypeWrapper<IntervalTissue>;
  Long: ResolverTypeWrapper<Scalars['Long']>;
  Manhattan: ResolverTypeWrapper<Manhattan>;
  ManhattanAssociation: ResolverTypeWrapper<ManhattanAssociation>;
  Metadata: ResolverTypeWrapper<Metadata>;
  NewEntityRelatedToVariant: ResolverTypeWrapper<NewEntityRelatedToVariant>;
  Overlap: ResolverTypeWrapper<Overlap>;
  OverlappedInfoForStudy: ResolverTypeWrapper<OverlappedInfoForStudy>;
  OverlappedStudy: ResolverTypeWrapper<OverlappedStudy>;
  OverlappedVariantsStudies: ResolverTypeWrapper<OverlappedVariantsStudies>;
  Pagination: Pagination;
  PheWAS: ResolverTypeWrapper<PheWas>;
  PheWASAssociation: ResolverTypeWrapper<PheWasAssociation>;
  QTLColocalisation: ResolverTypeWrapper<QtlColocalisation>;
  QTLElement: ResolverTypeWrapper<QtlElement>;
  QTLTissue: ResolverTypeWrapper<QtlTissue>;
  Query: ResolverTypeWrapper<{}>;
  RegionalAssociation: ResolverTypeWrapper<RegionalAssociation>;
  SLGRow: ResolverTypeWrapper<SlgRow>;
  SLGTable: ResolverTypeWrapper<SlgTable>;
  ScoredGene: ResolverTypeWrapper<ScoredGene>;
  SearchResult: ResolverTypeWrapper<SearchResult>;
  String: ResolverTypeWrapper<Scalars['String']>;
  StudiesAndLeadVariantsForGene: ResolverTypeWrapper<StudiesAndLeadVariantsForGene>;
  Study: ResolverTypeWrapper<Study>;
  StudyForGene: ResolverTypeWrapper<StudyForGene>;
  TagVariantAssociation: ResolverTypeWrapper<TagVariantAssociation>;
  TagVariantIndexVariantStudy: ResolverTypeWrapper<TagVariantIndexVariantStudy>;
  TagVariantsAndStudiesForIndexVariant: ResolverTypeWrapper<TagVariantsAndStudiesForIndexVariant>;
  Tissue: ResolverTypeWrapper<Tissue>;
  TopOverlappedStudies: ResolverTypeWrapper<TopOverlappedStudies>;
  V2DBeta: ResolverTypeWrapper<V2DBeta>;
  V2DL2GRowByGene: ResolverTypeWrapper<V2Dl2GRowByGene>;
  V2DOdds: ResolverTypeWrapper<V2DOdds>;
  Variant: ResolverTypeWrapper<Variant>;
  Version: ResolverTypeWrapper<Version>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  CredSetTagElement: CredSetTagElement;
  DistanceElement: DistanceElement;
  DistanceTissue: DistanceTissue;
  FPredTissue: FPredTissue;
  Float: Scalars['Float'];
  FunctionalPredictionElement: FunctionalPredictionElement;
  G2VSchema: G2VSchema;
  G2VSchemaElement: G2VSchemaElement;
  GWASColocalisation: GwasColocalisation;
  GWASColocalisationForQTLWithGene: GwasColocalisationForQtlWithGene;
  GWASLRColocalisation: GwaslrColocalisation;
  Gecko: Gecko;
  Gene: Gene;
  GeneForVariant: GeneForVariant;
  GeneTagVariant: GeneTagVariant;
  ID: Scalars['ID'];
  IndexVariantAssociation: IndexVariantAssociation;
  IndexVariantsAndStudiesForTagVariant: IndexVariantsAndStudiesForTagVariant;
  Int: Scalars['Int'];
  IntervalElement: IntervalElement;
  IntervalTissue: IntervalTissue;
  Long: Scalars['Long'];
  Manhattan: Manhattan;
  ManhattanAssociation: ManhattanAssociation;
  Metadata: Metadata;
  NewEntityRelatedToVariant: NewEntityRelatedToVariant;
  Overlap: Overlap;
  OverlappedInfoForStudy: OverlappedInfoForStudy;
  OverlappedStudy: OverlappedStudy;
  OverlappedVariantsStudies: OverlappedVariantsStudies;
  Pagination: Pagination;
  PheWAS: PheWas;
  PheWASAssociation: PheWasAssociation;
  QTLColocalisation: QtlColocalisation;
  QTLElement: QtlElement;
  QTLTissue: QtlTissue;
  Query: {};
  RegionalAssociation: RegionalAssociation;
  SLGRow: SlgRow;
  SLGTable: SlgTable;
  ScoredGene: ScoredGene;
  SearchResult: SearchResult;
  String: Scalars['String'];
  StudiesAndLeadVariantsForGene: StudiesAndLeadVariantsForGene;
  Study: Study;
  StudyForGene: StudyForGene;
  TagVariantAssociation: TagVariantAssociation;
  TagVariantIndexVariantStudy: TagVariantIndexVariantStudy;
  TagVariantsAndStudiesForIndexVariant: TagVariantsAndStudiesForIndexVariant;
  Tissue: Tissue;
  TopOverlappedStudies: TopOverlappedStudies;
  V2DBeta: V2DBeta;
  V2DL2GRowByGene: V2Dl2GRowByGene;
  V2DOdds: V2DOdds;
  Variant: Variant;
  Version: Version;
};

export type CredSetTagElementResolvers<ContextType = any, ParentType extends ResolversParentTypes['CredSetTagElement'] = ResolversParentTypes['CredSetTagElement']> = {
  MultisignalMethod?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  beta?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  is95?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  is99?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  logABF?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  postProb?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pval?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  se?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  tagVariant?: Resolver<ResolversTypes['Variant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DistanceElementResolvers<ContextType = any, ParentType extends ResolversParentTypes['DistanceElement'] = ResolversParentTypes['DistanceElement']> = {
  aggregatedScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sourceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tissues?: Resolver<Array<ResolversTypes['DistanceTissue']>, ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DistanceTissueResolvers<ContextType = any, ParentType extends ResolversParentTypes['DistanceTissue'] = ResolversParentTypes['DistanceTissue']> = {
  distance?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  quantile?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tissue?: Resolver<ResolversTypes['Tissue'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FPredTissueResolvers<ContextType = any, ParentType extends ResolversParentTypes['FPredTissue'] = ResolversParentTypes['FPredTissue']> = {
  maxEffectLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxEffectScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tissue?: Resolver<ResolversTypes['Tissue'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FunctionalPredictionElementResolvers<ContextType = any, ParentType extends ResolversParentTypes['FunctionalPredictionElement'] = ResolversParentTypes['FunctionalPredictionElement']> = {
  aggregatedScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sourceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tissues?: Resolver<Array<ResolversTypes['FPredTissue']>, ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type G2VSchemaResolvers<ContextType = any, ParentType extends ResolversParentTypes['G2VSchema'] = ResolversParentTypes['G2VSchema']> = {
  distances?: Resolver<Array<ResolversTypes['G2VSchemaElement']>, ParentType, ContextType>;
  functionalPredictions?: Resolver<Array<ResolversTypes['G2VSchemaElement']>, ParentType, ContextType>;
  intervals?: Resolver<Array<ResolversTypes['G2VSchemaElement']>, ParentType, ContextType>;
  qtls?: Resolver<Array<ResolversTypes['G2VSchemaElement']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type G2VSchemaElementResolvers<ContextType = any, ParentType extends ResolversParentTypes['G2VSchemaElement'] = ResolversParentTypes['G2VSchemaElement']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pmid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceDescriptionBreakdown?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceDescriptionOverview?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sourceLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tissues?: Resolver<Array<ResolversTypes['Tissue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GwasColocalisationResolvers<ContextType = any, ParentType extends ResolversParentTypes['GWASColocalisation'] = ResolversParentTypes['GWASColocalisation']> = {
  beta?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  h3?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  h4?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  indexVariant?: Resolver<ResolversTypes['Variant'], ParentType, ContextType>;
  log2h4h3?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  study?: Resolver<ResolversTypes['Study'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GwasColocalisationForQtlWithGeneResolvers<ContextType = any, ParentType extends ResolversParentTypes['GWASColocalisationForQTLWithGene'] = ResolversParentTypes['GWASColocalisationForQTLWithGene']> = {
  h3?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  h4?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  leftVariant?: Resolver<ResolversTypes['Variant'], ParentType, ContextType>;
  log2h4h3?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  phenotypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  qtlStudyId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  study?: Resolver<ResolversTypes['Study'], ParentType, ContextType>;
  tissue?: Resolver<ResolversTypes['Tissue'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GwaslrColocalisationResolvers<ContextType = any, ParentType extends ResolversParentTypes['GWASLRColocalisation'] = ResolversParentTypes['GWASLRColocalisation']> = {
  h3?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  h4?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  leftStudy?: Resolver<ResolversTypes['Study'], ParentType, ContextType>;
  leftVariant?: Resolver<ResolversTypes['Variant'], ParentType, ContextType>;
  log2h4h3?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rightStudy?: Resolver<ResolversTypes['Study'], ParentType, ContextType>;
  rightVariant?: Resolver<ResolversTypes['Variant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeckoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Gecko'] = ResolversParentTypes['Gecko']> = {
  geneTagVariants?: Resolver<Array<ResolversTypes['GeneTagVariant']>, ParentType, ContextType>;
  genes?: Resolver<Array<ResolversTypes['Gene']>, ParentType, ContextType>;
  indexVariants?: Resolver<Array<ResolversTypes['Variant']>, ParentType, ContextType>;
  studies?: Resolver<Array<ResolversTypes['Study']>, ParentType, ContextType>;
  tagVariantIndexVariantStudies?: Resolver<Array<ResolversTypes['TagVariantIndexVariantStudy']>, ParentType, ContextType>;
  tagVariants?: Resolver<Array<ResolversTypes['Variant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeneResolvers<ContextType = any, ParentType extends ResolversParentTypes['Gene'] = ResolversParentTypes['Gene']> = {
  bioType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chromosome?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  exons?: Resolver<Array<ResolversTypes['Long']>, ParentType, ContextType>;
  fwdStrand?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tss?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeneForVariantResolvers<ContextType = any, ParentType extends ResolversParentTypes['GeneForVariant'] = ResolversParentTypes['GeneForVariant']> = {
  distances?: Resolver<Array<ResolversTypes['DistanceElement']>, ParentType, ContextType>;
  functionalPredictions?: Resolver<Array<ResolversTypes['FunctionalPredictionElement']>, ParentType, ContextType>;
  gene?: Resolver<ResolversTypes['Gene'], ParentType, ContextType>;
  intervals?: Resolver<Array<ResolversTypes['IntervalElement']>, ParentType, ContextType>;
  overallScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  qtls?: Resolver<Array<ResolversTypes['QTLElement']>, ParentType, ContextType>;
  variant?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeneTagVariantResolvers<ContextType = any, ParentType extends ResolversParentTypes['GeneTagVariant'] = ResolversParentTypes['GeneTagVariant']> = {
  geneId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  overallScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  tagVariantId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IndexVariantAssociationResolvers<ContextType = any, ParentType extends ResolversParentTypes['IndexVariantAssociation'] = ResolversParentTypes['IndexVariantAssociation']> = {
  afr1000GProp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amr1000GProp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  beta?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  betaCILower?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  betaCIUpper?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  direction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eas1000GProp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  eur1000GProp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  log10Abf?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  nCases?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  nTotal?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  oddsRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  oddsRatioCILower?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  oddsRatioCIUpper?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  overallR2?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  posteriorProbability?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pval?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pvalExponent?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  pvalMantissa?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sas1000GProp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  study?: Resolver<ResolversTypes['Study'], ParentType, ContextType>;
  tagVariant?: Resolver<ResolversTypes['Variant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IndexVariantsAndStudiesForTagVariantResolvers<ContextType = any, ParentType extends ResolversParentTypes['IndexVariantsAndStudiesForTagVariant'] = ResolversParentTypes['IndexVariantsAndStudiesForTagVariant']> = {
  associations?: Resolver<Array<ResolversTypes['TagVariantAssociation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IntervalElementResolvers<ContextType = any, ParentType extends ResolversParentTypes['IntervalElement'] = ResolversParentTypes['IntervalElement']> = {
  aggregatedScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sourceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tissues?: Resolver<Array<ResolversTypes['IntervalTissue']>, ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IntervalTissueResolvers<ContextType = any, ParentType extends ResolversParentTypes['IntervalTissue'] = ResolversParentTypes['IntervalTissue']> = {
  quantile?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tissue?: Resolver<ResolversTypes['Tissue'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export type ManhattanResolvers<ContextType = any, ParentType extends ResolversParentTypes['Manhattan'] = ResolversParentTypes['Manhattan']> = {
  associations?: Resolver<Array<ResolversTypes['ManhattanAssociation']>, ParentType, ContextType>;
  topOverlappedStudies?: Resolver<Maybe<ResolversTypes['TopOverlappedStudies']>, ParentType, ContextType, Partial<ManhattanTopOverlappedStudiesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ManhattanAssociationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ManhattanAssociation'] = ResolversParentTypes['ManhattanAssociation']> = {
  bestColocGenes?: Resolver<Array<ResolversTypes['ScoredGene']>, ParentType, ContextType>;
  bestGenes?: Resolver<Array<ResolversTypes['ScoredGene']>, ParentType, ContextType>;
  bestLocus2Genes?: Resolver<Array<ResolversTypes['ScoredGene']>, ParentType, ContextType>;
  beta?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  betaCILower?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  betaCIUpper?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  credibleSetSize?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  direction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ldSetSize?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  oddsRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  oddsRatioCILower?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  oddsRatioCIUpper?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pval?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pvalExponent?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  pvalMantissa?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalSetSize?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  variant?: Resolver<ResolversTypes['Variant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['Metadata'] = ResolversParentTypes['Metadata']> = {
  apiVersion?: Resolver<ResolversTypes['Version'], ParentType, ContextType>;
  dataVersion?: Resolver<ResolversTypes['Version'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NewEntityRelatedToVariantResolvers<ContextType = any, ParentType extends ResolversParentTypes['NewEntityRelatedToVariant'] = ResolversParentTypes['NewEntityRelatedToVariant']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  newProperty?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OverlapResolvers<ContextType = any, ParentType extends ResolversParentTypes['Overlap'] = ResolversParentTypes['Overlap']> = {
  distinctA?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  distinctB?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  overlapAB?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  variantIdA?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  variantIdB?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OverlappedInfoForStudyResolvers<ContextType = any, ParentType extends ResolversParentTypes['OverlappedInfoForStudy'] = ResolversParentTypes['OverlappedInfoForStudy']> = {
  overlappedVariantsForStudies?: Resolver<Array<ResolversTypes['OverlappedVariantsStudies']>, ParentType, ContextType>;
  study?: Resolver<Maybe<ResolversTypes['Study']>, ParentType, ContextType>;
  variantIntersectionSet?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OverlappedStudyResolvers<ContextType = any, ParentType extends ResolversParentTypes['OverlappedStudy'] = ResolversParentTypes['OverlappedStudy']> = {
  numOverlapLoci?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  study?: Resolver<Maybe<ResolversTypes['Study']>, ParentType, ContextType>;
  studyId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OverlappedVariantsStudiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['OverlappedVariantsStudies'] = ResolversParentTypes['OverlappedVariantsStudies']> = {
  overlaps?: Resolver<Array<ResolversTypes['Overlap']>, ParentType, ContextType>;
  study?: Resolver<Maybe<ResolversTypes['Study']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PheWasResolvers<ContextType = any, ParentType extends ResolversParentTypes['PheWAS'] = ResolversParentTypes['PheWAS']> = {
  associations?: Resolver<Array<ResolversTypes['PheWASAssociation']>, ParentType, ContextType>;
  totalGWASStudies?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PheWasAssociationResolvers<ContextType = any, ParentType extends ResolversParentTypes['PheWASAssociation'] = ResolversParentTypes['PheWASAssociation']> = {
  beta?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  eaf?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  nCases?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  nTotal?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  oddsRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pval?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  se?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  study?: Resolver<Maybe<ResolversTypes['Study']>, ParentType, ContextType>;
  studyId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QtlColocalisationResolvers<ContextType = any, ParentType extends ResolversParentTypes['QTLColocalisation'] = ResolversParentTypes['QTLColocalisation']> = {
  beta?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gene?: Resolver<ResolversTypes['Gene'], ParentType, ContextType>;
  h3?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  h4?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  indexVariant?: Resolver<ResolversTypes['Variant'], ParentType, ContextType>;
  log2h4h3?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  phenotypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  qtlStudyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tissue?: Resolver<ResolversTypes['Tissue'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QtlElementResolvers<ContextType = any, ParentType extends ResolversParentTypes['QTLElement'] = ResolversParentTypes['QTLElement']> = {
  aggregatedScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sourceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tissues?: Resolver<Array<ResolversTypes['QTLTissue']>, ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QtlTissueResolvers<ContextType = any, ParentType extends ResolversParentTypes['QTLTissue'] = ResolversParentTypes['QTLTissue']> = {
  beta?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pval?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantile?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  tissue?: Resolver<ResolversTypes['Tissue'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  colocalisationsForGene?: Resolver<Array<ResolversTypes['GWASColocalisationForQTLWithGene']>, ParentType, ContextType, RequireFields<QueryColocalisationsForGeneArgs, 'geneId'>>;
  gecko?: Resolver<Maybe<ResolversTypes['Gecko']>, ParentType, ContextType, RequireFields<QueryGeckoArgs, 'chromosome' | 'end' | 'start'>>;
  geneInfo?: Resolver<Maybe<ResolversTypes['Gene']>, ParentType, ContextType, RequireFields<QueryGeneInfoArgs, 'geneId'>>;
  genes?: Resolver<Array<ResolversTypes['Gene']>, ParentType, ContextType, RequireFields<QueryGenesArgs, 'chromosome' | 'end' | 'start'>>;
  genesForVariant?: Resolver<Array<ResolversTypes['GeneForVariant']>, ParentType, ContextType, RequireFields<QueryGenesForVariantArgs, 'variantId'>>;
  genesForVariantSchema?: Resolver<ResolversTypes['G2VSchema'], ParentType, ContextType>;
  gwasColocalisation?: Resolver<Array<ResolversTypes['GWASColocalisation']>, ParentType, ContextType, RequireFields<QueryGwasColocalisationArgs, 'studyId' | 'variantId'>>;
  gwasColocalisationForRegion?: Resolver<Array<ResolversTypes['GWASLRColocalisation']>, ParentType, ContextType, RequireFields<QueryGwasColocalisationForRegionArgs, 'chromosome' | 'end' | 'start'>>;
  gwasCredibleSet?: Resolver<Array<ResolversTypes['CredSetTagElement']>, ParentType, ContextType, RequireFields<QueryGwasCredibleSetArgs, 'studyId' | 'variantId'>>;
  gwasRegional?: Resolver<Array<ResolversTypes['RegionalAssociation']>, ParentType, ContextType, RequireFields<QueryGwasRegionalArgs, 'chromosome' | 'end' | 'start' | 'studyId'>>;
  indexVariantsAndStudiesForTagVariant?: Resolver<ResolversTypes['IndexVariantsAndStudiesForTagVariant'], ParentType, ContextType, RequireFields<QueryIndexVariantsAndStudiesForTagVariantArgs, 'variantId'>>;
  manhattan?: Resolver<ResolversTypes['Manhattan'], ParentType, ContextType, RequireFields<QueryManhattanArgs, 'studyId'>>;
  meta?: Resolver<ResolversTypes['Metadata'], ParentType, ContextType>;
  overlapInfoForStudy?: Resolver<ResolversTypes['OverlappedInfoForStudy'], ParentType, ContextType, RequireFields<QueryOverlapInfoForStudyArgs, 'studyId' | 'studyIds'>>;
  pheWAS?: Resolver<ResolversTypes['PheWAS'], ParentType, ContextType, RequireFields<QueryPheWasArgs, 'variantId'>>;
  qtlColocalisation?: Resolver<Array<ResolversTypes['QTLColocalisation']>, ParentType, ContextType, RequireFields<QueryQtlColocalisationArgs, 'studyId' | 'variantId'>>;
  qtlCredibleSet?: Resolver<Array<ResolversTypes['CredSetTagElement']>, ParentType, ContextType, RequireFields<QueryQtlCredibleSetArgs, 'bioFeature' | 'geneId' | 'studyId' | 'variantId'>>;
  qtlRegional?: Resolver<Array<ResolversTypes['RegionalAssociation']>, ParentType, ContextType, RequireFields<QueryQtlRegionalArgs, 'bioFeature' | 'chromosome' | 'end' | 'geneId' | 'start' | 'studyId'>>;
  regionPlot?: Resolver<Maybe<ResolversTypes['Gecko']>, ParentType, ContextType, Partial<QueryRegionPlotArgs>>;
  search?: Resolver<ResolversTypes['SearchResult'], ParentType, ContextType, RequireFields<QuerySearchArgs, 'queryString'>>;
  studiesAndLeadVariantsForGene?: Resolver<Array<ResolversTypes['StudiesAndLeadVariantsForGene']>, ParentType, ContextType, RequireFields<QueryStudiesAndLeadVariantsForGeneArgs, 'geneId'>>;
  studiesAndLeadVariantsForGeneByL2G?: Resolver<Array<ResolversTypes['V2DL2GRowByGene']>, ParentType, ContextType, RequireFields<QueryStudiesAndLeadVariantsForGeneByL2GArgs, 'geneId'>>;
  studiesForGene?: Resolver<Array<ResolversTypes['StudyForGene']>, ParentType, ContextType, RequireFields<QueryStudiesForGeneArgs, 'geneId'>>;
  studyAndLeadVariantInfo?: Resolver<Maybe<ResolversTypes['StudiesAndLeadVariantsForGene']>, ParentType, ContextType, RequireFields<QueryStudyAndLeadVariantInfoArgs, 'studyId' | 'variantId'>>;
  studyInfo?: Resolver<Maybe<ResolversTypes['Study']>, ParentType, ContextType, RequireFields<QueryStudyInfoArgs, 'studyId'>>;
  studyLocus2GeneTable?: Resolver<ResolversTypes['SLGTable'], ParentType, ContextType, RequireFields<QueryStudyLocus2GeneTableArgs, 'studyId' | 'variantId'>>;
  tagVariantsAndStudiesForIndexVariant?: Resolver<ResolversTypes['TagVariantsAndStudiesForIndexVariant'], ParentType, ContextType, RequireFields<QueryTagVariantsAndStudiesForIndexVariantArgs, 'variantId'>>;
  topOverlappedStudies?: Resolver<ResolversTypes['TopOverlappedStudies'], ParentType, ContextType, RequireFields<QueryTopOverlappedStudiesArgs, 'studyId'>>;
  variantInfo?: Resolver<Maybe<ResolversTypes['Variant']>, ParentType, ContextType, RequireFields<QueryVariantInfoArgs, 'id'>>;
};

export type RegionalAssociationResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegionalAssociation'] = ResolversParentTypes['RegionalAssociation']> = {
  pval?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  variant?: Resolver<ResolversTypes['Variant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SlgRowResolvers<ContextType = any, ParentType extends ResolversParentTypes['SLGRow'] = ResolversParentTypes['SLGRow']> = {
  distanceToLocus?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  gene?: Resolver<ResolversTypes['Gene'], ParentType, ContextType>;
  hasColoc?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  yProbaDistance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  yProbaInteraction?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  yProbaModel?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  yProbaMolecularQTL?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  yProbaPathogenicity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SlgTableResolvers<ContextType = any, ParentType extends ResolversParentTypes['SLGTable'] = ResolversParentTypes['SLGTable']> = {
  rows?: Resolver<Array<ResolversTypes['SLGRow']>, ParentType, ContextType>;
  study?: Resolver<Maybe<ResolversTypes['Study']>, ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['Variant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScoredGeneResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScoredGene'] = ResolversParentTypes['ScoredGene']> = {
  gene?: Resolver<ResolversTypes['Gene'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResult'] = ResolversParentTypes['SearchResult']> = {
  genes?: Resolver<Array<ResolversTypes['Gene']>, ParentType, ContextType>;
  studies?: Resolver<Array<ResolversTypes['Study']>, ParentType, ContextType>;
  totalGenes?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  totalStudies?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  totalVariants?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  variants?: Resolver<Array<ResolversTypes['Variant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudiesAndLeadVariantsForGeneResolvers<ContextType = any, ParentType extends ResolversParentTypes['StudiesAndLeadVariantsForGene'] = ResolversParentTypes['StudiesAndLeadVariantsForGene']> = {
  beta?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  betaCILower?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  betaCIUpper?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  direction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  indexVariant?: Resolver<ResolversTypes['Variant'], ParentType, ContextType>;
  oddsRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  oddsRatioCILower?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  oddsRatioCIUpper?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pval?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pvalExponent?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  pvalMantissa?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  study?: Resolver<ResolversTypes['Study'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Study'] = ResolversParentTypes['Study']> = {
  ancestryInitial?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  ancestryReplication?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  hasSumstats?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  nCases?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  nInitial?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  nReplication?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  nTotal?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  numAssocLoci?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  pmid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pubAuthor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pubDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pubJournal?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pubTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  studyId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  traitCategory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  traitEfos?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  traitReported?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudyForGeneResolvers<ContextType = any, ParentType extends ResolversParentTypes['StudyForGene'] = ResolversParentTypes['StudyForGene']> = {
  study?: Resolver<ResolversTypes['Study'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagVariantAssociationResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagVariantAssociation'] = ResolversParentTypes['TagVariantAssociation']> = {
  afr1000GProp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amr1000GProp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  beta?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  betaCILower?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  betaCIUpper?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  direction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eas1000GProp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  eur1000GProp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  indexVariant?: Resolver<ResolversTypes['Variant'], ParentType, ContextType>;
  log10Abf?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  nCases?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  nTotal?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  oddsRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  oddsRatioCILower?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  oddsRatioCIUpper?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  overallR2?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  posteriorProbability?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pval?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pvalExponent?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  pvalMantissa?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sas1000GProp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  study?: Resolver<ResolversTypes['Study'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagVariantIndexVariantStudyResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagVariantIndexVariantStudy'] = ResolversParentTypes['TagVariantIndexVariantStudy']> = {
  beta?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  betaCILower?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  betaCIUpper?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  direction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  indexVariantId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  oddsRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  oddsRatioCILower?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  oddsRatioCIUpper?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  posteriorProbability?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pval?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pvalExponent?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  pvalMantissa?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  r2?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  studyId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tagVariantId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagVariantsAndStudiesForIndexVariantResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagVariantsAndStudiesForIndexVariant'] = ResolversParentTypes['TagVariantsAndStudiesForIndexVariant']> = {
  associations?: Resolver<Array<ResolversTypes['IndexVariantAssociation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TissueResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tissue'] = ResolversParentTypes['Tissue']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopOverlappedStudiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['TopOverlappedStudies'] = ResolversParentTypes['TopOverlappedStudies']> = {
  study?: Resolver<Maybe<ResolversTypes['Study']>, ParentType, ContextType>;
  topStudiesByLociOverlap?: Resolver<Array<ResolversTypes['OverlappedStudy']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type V2DBetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['V2DBeta'] = ResolversParentTypes['V2DBeta']> = {
  betaCI?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  betaCILower?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  betaCIUpper?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  direction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type V2Dl2GRowByGeneResolvers<ContextType = any, ParentType extends ResolversParentTypes['V2DL2GRowByGene'] = ResolversParentTypes['V2DL2GRowByGene']> = {
  beta?: Resolver<ResolversTypes['V2DBeta'], ParentType, ContextType>;
  odds?: Resolver<ResolversTypes['V2DOdds'], ParentType, ContextType>;
  pval?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pvalExponent?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  pvalMantissa?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  study?: Resolver<ResolversTypes['Study'], ParentType, ContextType>;
  variant?: Resolver<ResolversTypes['Variant'], ParentType, ContextType>;
  yProbaDistance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  yProbaInteraction?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  yProbaModel?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  yProbaMolecularQTL?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  yProbaPathogenicity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type V2DOddsResolvers<ContextType = any, ParentType extends ResolversParentTypes['V2DOdds'] = ResolversParentTypes['V2DOdds']> = {
  oddsCI?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  oddsCILower?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  oddsCIUpper?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VariantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Variant'] = ResolversParentTypes['Variant']> = {
  altAllele?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  caddPhred?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  caddRaw?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  chromosome?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chromosomeB37?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gnomadAFR?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gnomadAMR?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gnomadASJ?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gnomadEAS?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gnomadFIN?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gnomadNFE?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gnomadNFEEST?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gnomadNFENWE?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gnomadNFEONF?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gnomadNFESEU?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gnomadOTH?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mostSevereConsequence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nearestCodingGene?: Resolver<Maybe<ResolversTypes['Gene']>, ParentType, ContextType>;
  nearestCodingGeneDistance?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  nearestGene?: Resolver<Maybe<ResolversTypes['Gene']>, ParentType, ContextType>;
  nearestGeneDistance?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  newEntities?: Resolver<Array<ResolversTypes['NewEntityRelatedToVariant']>, ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  positionB37?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  refAllele?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rsId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VersionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Version'] = ResolversParentTypes['Version']> = {
  major?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  minor?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  patch?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  CredSetTagElement?: CredSetTagElementResolvers<ContextType>;
  DistanceElement?: DistanceElementResolvers<ContextType>;
  DistanceTissue?: DistanceTissueResolvers<ContextType>;
  FPredTissue?: FPredTissueResolvers<ContextType>;
  FunctionalPredictionElement?: FunctionalPredictionElementResolvers<ContextType>;
  G2VSchema?: G2VSchemaResolvers<ContextType>;
  G2VSchemaElement?: G2VSchemaElementResolvers<ContextType>;
  GWASColocalisation?: GwasColocalisationResolvers<ContextType>;
  GWASColocalisationForQTLWithGene?: GwasColocalisationForQtlWithGeneResolvers<ContextType>;
  GWASLRColocalisation?: GwaslrColocalisationResolvers<ContextType>;
  Gecko?: GeckoResolvers<ContextType>;
  Gene?: GeneResolvers<ContextType>;
  GeneForVariant?: GeneForVariantResolvers<ContextType>;
  GeneTagVariant?: GeneTagVariantResolvers<ContextType>;
  IndexVariantAssociation?: IndexVariantAssociationResolvers<ContextType>;
  IndexVariantsAndStudiesForTagVariant?: IndexVariantsAndStudiesForTagVariantResolvers<ContextType>;
  IntervalElement?: IntervalElementResolvers<ContextType>;
  IntervalTissue?: IntervalTissueResolvers<ContextType>;
  Long?: GraphQLScalarType;
  Manhattan?: ManhattanResolvers<ContextType>;
  ManhattanAssociation?: ManhattanAssociationResolvers<ContextType>;
  Metadata?: MetadataResolvers<ContextType>;
  NewEntityRelatedToVariant?: NewEntityRelatedToVariantResolvers<ContextType>;
  Overlap?: OverlapResolvers<ContextType>;
  OverlappedInfoForStudy?: OverlappedInfoForStudyResolvers<ContextType>;
  OverlappedStudy?: OverlappedStudyResolvers<ContextType>;
  OverlappedVariantsStudies?: OverlappedVariantsStudiesResolvers<ContextType>;
  PheWAS?: PheWasResolvers<ContextType>;
  PheWASAssociation?: PheWasAssociationResolvers<ContextType>;
  QTLColocalisation?: QtlColocalisationResolvers<ContextType>;
  QTLElement?: QtlElementResolvers<ContextType>;
  QTLTissue?: QtlTissueResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RegionalAssociation?: RegionalAssociationResolvers<ContextType>;
  SLGRow?: SlgRowResolvers<ContextType>;
  SLGTable?: SlgTableResolvers<ContextType>;
  ScoredGene?: ScoredGeneResolvers<ContextType>;
  SearchResult?: SearchResultResolvers<ContextType>;
  StudiesAndLeadVariantsForGene?: StudiesAndLeadVariantsForGeneResolvers<ContextType>;
  Study?: StudyResolvers<ContextType>;
  StudyForGene?: StudyForGeneResolvers<ContextType>;
  TagVariantAssociation?: TagVariantAssociationResolvers<ContextType>;
  TagVariantIndexVariantStudy?: TagVariantIndexVariantStudyResolvers<ContextType>;
  TagVariantsAndStudiesForIndexVariant?: TagVariantsAndStudiesForIndexVariantResolvers<ContextType>;
  Tissue?: TissueResolvers<ContextType>;
  TopOverlappedStudies?: TopOverlappedStudiesResolvers<ContextType>;
  V2DBeta?: V2DBetaResolvers<ContextType>;
  V2DL2GRowByGene?: V2Dl2GRowByGeneResolvers<ContextType>;
  V2DOdds?: V2DOddsResolvers<ContextType>;
  Variant?: VariantResolvers<ContextType>;
  Version?: VersionResolvers<ContextType>;
};

