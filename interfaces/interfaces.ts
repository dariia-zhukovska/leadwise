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

export interface ServiceItem {
  id: string;
  slug: string;
  mainTitle: string;
  subtitle: string;
  description: string;
  mainImg: string;
  secondaryTitle: string;
  secondarySubtitle: string;
  cards: Card[];
}

interface Card {
  cardId: string;
  cardTitle: string;
  cardDescription: string;
  cardItems: CardItem[];
  cardImg: string;
}

interface CardItem {
  id: string;
  text: string;
}

export interface caseStudy {
  id: string;
  name: string;
  icon: string;
  mainTitle: string;
  numbers: {
    id: string;
    title: string;
    description: string;
  }[];
  tags: {
    id: string;
    categoryTitle: string;
    categoryDescription: string;
  }[];
  about: string;
  aboutImage: string;
  description: string;
  image: string;
  challengeDescription: string;
  challengeList: {
    id: string;
    title: string;
    description: string;
  }[];
  solutionDescription: string;
  solutionList: {
    id: string;
    title: string;
    description: string;
  }[];
  implementationDescription: string;
  implementationList: {
    id: string;
    description: string;
  }[];
  resultImage: string;
  resultsList: {
    id: string;
    title: string;
    description: string;
  }[];
  resultDescription: string;
  resultDescriptionList: {
    id: string;
    description: string;
  }[];
  resultsEnding?: string;
}
