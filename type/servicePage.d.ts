export interface IStep {
  strong: string;
  para: string;
}

export interface IMethod {
  strong: string;
  para: string;
}

export interface IFirstPart {
  title: string;
  subtitle: string;
  stepTitle: string;
  steps: IStep[];
  image: string;
}

export interface ISecondPart {
  methodTitle: string;
  methods: IMethod[];
  image: string;
}

export interface IServiceMetadata {
  metaTitle: string;
  metaDescription: string;
  metaImage: string;
  canonical: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  jsonLd: Record<string, any>;
}

export interface IServicePage {
  id: string;
  firstPart: IFirstPart;
  secondPart: ISecondPart;
  priceTitle: string;
  priceDesc: string;
  endTitle: string;
  endDesc: string;
  metadata: IServiceMetadata;
}

