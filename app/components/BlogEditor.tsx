import { Form } from 'remix';
import { MDXPreviewer } from './MDXPreviewer';

type BlogEditorProps = {
  blog_id?: number;
  title?: string;
  blog_slug?: string;
  is_published?: boolean;
  content?: string;
  formError?: string;
  isIdle: boolean;
};

export const BlogEditor = (props: BlogEditorProps) => {
  return (
    <Form method="post" className="mt-4 flex flex-col gap-4">
      <input type="hidden" defaultValue={props.blog_id} name="blog_id" />
      <label className="flex flex-1 flex-col gap-1">
        <span className="font-bold">Title:</span>
        <input
          className="rounded border border-gray-900 py-1 px-2"
          defaultValue={props.title ?? ''}
          name="title"
          placeholder="Build a blog"
        />
      </label>
      <div className="flex gap-4">
        <label className="flex flex-1 flex-col gap-1">
          <span className="font-bold">Slug:</span>
          <input
            className="rounded border border-gray-900 py-1 px-2"
            defaultValue={props.blog_slug ?? ''}
            name="blog_slug"
            placeholder="build-a-blog"
          />
        </label>
      </div>
      <label className="flex items-center gap-4">
        <span className="font-bold">Published:</span>
        <input
          type="checkbox"
          className="rounded border border-gray-900 py-1 px-2"
          defaultChecked={props.is_published}
          name="is_published"
        />
      </label>
      <MDXPreviewer content={props.content ?? ''} fieldName="content" />
      <div className="flex justify-between">
        <span className="self-center text-center text-secondary">
          {props.formError}
        </span>
        <button
          type="submit"
          disabled={!props.isIdle}
          className="btn-primary self-center"
        >
          Publish
        </button>
      </div>
    </Form>
  );
};
