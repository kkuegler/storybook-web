type Meta = {
  id: string;
  title: string;
  sidebar_title?: string;
};

type BlogPost = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
