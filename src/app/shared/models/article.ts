interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  img: string;
  createdBy: string;
  likes: number;
  comments: Array<Comment>;
  date_creation: Date;
}
