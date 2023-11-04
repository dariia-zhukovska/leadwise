export interface CaseStudy {
  id: string;
  slug: string;
  casePicture: string;
  cardTitle: string;
  numberOne: string;
  numberOneDescr: string;
  numberTwo: string;
  numberTwoDescr: string;
  tags: {
    id: string;
    name: string;
  }[];
  cardDescriptions: {
    id: string;
    number: string;
    details: string;
  }

}