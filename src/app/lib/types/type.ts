export interface ButtonType{
    title:string;
    className:string;
    type?:string;
    onClick?:()=>void
}

export interface CategoryCardType{
    title:string;
    imagesrc: string;
}

export interface NewAndPopularDataType{
     imagesrc:string,
     title:string,
     buttonTitle:string
}

export interface InputType{
   type:string,
   placeholder:string,
}