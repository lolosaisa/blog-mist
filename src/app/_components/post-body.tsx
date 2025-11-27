import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-3xl mx-auto px-5 py-10 text-foreground">
      <div
        className={`${markdownStyles.markdown} prose prose-lg`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
