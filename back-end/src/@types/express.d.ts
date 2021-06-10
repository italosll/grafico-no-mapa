/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
declare namespace Express {
    export interface Request {
      userId: number;
      userName: string;
      userEmail: string;
      userIsAdm: boolean;
      id:number;
      age_interval:string;
      visual_impairment:string;
      education_level:string;
      sex:string;
      background_color:string;
      color_scheme:string;
      accuracy_questions:Array<string>;
      qualitative_1:Array<string>;
      qualitative_2:Array<string>;
      qualitative_3:Array<string>;
      qualitative_4:Array<string>;
    }
  }
