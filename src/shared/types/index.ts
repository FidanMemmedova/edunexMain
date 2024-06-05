interface IGrade {
  [key: string]: number;
}
interface ISubjects {
  [key: string]: string;
}
interface ITopicSize {
  topic_id: number;
  size: number;
}

interface IExamTypes {
  ksq: string;
  bsq: string;
  quiz: string;
}

export interface IOptions {
  grades: IGrade[];
  types: IExamTypes;
  subject_units: IGrade[];
  subjects: ISubjects;
}

export interface IStepBody {
  reading_size?: string | null;
  listening?: boolean | null;
  topics_sizes?: Array<ITopicSize> | null;
  duration?: number | null;
  title?: string | null;
}

type TAnswer = {
  id: number;
  text: string;
  is_correct: boolean;
  letter: string;
  is_match: boolean;
  matching: null | string;
};

export interface ISingleSelect {
  id: number;
  subject_unit: number;
  content: string;
  file: string;
  type: string;
  size: string;
  duration: number;
  answers: Array<TAnswer>;
}
