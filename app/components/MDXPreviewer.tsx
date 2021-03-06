import { useEffect, useState, useRef } from 'react';
import { useFetcher } from 'remix';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import type { DialogOverlayProps } from '@reach/dialog';
import { MDXEditor } from './MDXEditor';
import { MDXLayout } from './MDXLayout';

type MDXPreviewerProps = { content: string; fieldName: string };

type MDXPreviewerModalProps = {
  content: string;
  onDismiss: DialogOverlayProps['onDismiss'];
};

type MDXData = {
  formError?: string;
  mdxErrors?: { description: string; lineText: string }[];
  mdxContent?: string;
};

type FormattedContent = { formError?: string; value?: string };

const MDXPreviewerModal = (props: MDXPreviewerModalProps) => {
  const fetcher = useFetcher<MDXData>();

  useEffect(() => {
    if (fetcher.type === 'init' && props.content) {
      fetcher.submit(
        { content: props.content },
        { method: 'post', action: '/admin/bundle-mdx' },
      );
    }
  }, [props.content, fetcher.type, fetcher.submit]);

  const getContent = () => {
    if (fetcher.data?.mdxContent) {
      return <MDXLayout mdx={fetcher.data.mdxContent} />;
    }

    if (fetcher.data?.mdxErrors) {
      return fetcher.data.mdxErrors.map(({ description, lineText }) => {
        return (
          <div className="my-2 flex flex-col gap-2">
            <span className="flex justify-center font-bold">{description}</span>
            <pre className="overflow-auto rounded bg-gray-100 p-4">
              {lineText}
            </pre>
          </div>
        );
      });
    }

    let content = '';
    if (fetcher.state === 'loading') {
      content = 'Building MDX Layout...';
    } else if (fetcher.data?.formError) {
      content = fetcher.data.formError;
    } else {
      content = 'You need to provide content to see a preview...';
    }

    return <span className="flex justify-center font-bold">{content}</span>;
  };

  return (
    <DialogOverlay
      onDismiss={props.onDismiss}
      className="fixed top-0 right-0 bottom-0 left-0 overflow-auto bg-gray-/80"
    >
      <DialogContent className="my-[10vh] mx-auto max-h-[80vh] w-[60vw] overflow-auto rounded-lg border-4 border-gray-900 bg-white p-8 outline-none">
        {getContent()}
      </DialogContent>
    </DialogOverlay>
  );
};

function useFormattedContent(defaultValue: string) {
  const contentRef = useRef<HTMLInputElement>(null);
  const [formattedContent, setFormattedContent] = useState<FormattedContent>({
    value: defaultValue,
    formError: '',
  });

  const fetcher = useFetcher<FormattedContent>();
  useEffect(() => {
    if (fetcher.data) {
      setFormattedContent(fetcher.data);
    }
  }, [fetcher.data]);

  const formatValue = (content: string) => {
    if (contentRef.current) {
      setFormattedContent((prevContent) => ({
        ...prevContent,
        value: contentRef.current?.value ?? '',
      }));
    }

    fetcher.submit(
      { content },
      { method: 'post', action: '/admin/format-content' },
    );
  };

  return { formattedContent, formatValue, contentRef };
}

export const MDXPreviewer = (props: MDXPreviewerProps) => {
  const { formattedContent, formatValue, contentRef } = useFormattedContent(
    props.content,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const open = () => setIsModalOpen(true);
  const close = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex flex-col gap-1">
        <div className="flex gap-4">
          <label className="mr-auto font-bold" id="mdx-content-editor">
            Content:
          </label>
          <button
            type="button"
            className="font-bold italic text-primary hover:text-gray-800"
            onClick={() => formatValue(contentRef.current?.value ?? '')}
          >
            Format
          </button>
          <button
            type="button"
            className="font-bold italic text-primary hover:text-gray-800"
            onClick={open}
          >
            Preview
          </button>
        </div>
        <MDXEditor
          labeledBy="mdx-content-editor"
          content={formattedContent.value ?? ''}
          onChange={(value) => {
            if (contentRef.current) {
              contentRef.current.value = value;
            }
          }}
        />
        <input
          type="hidden"
          name={props.fieldName}
          ref={contentRef}
          defaultValue={formattedContent.value ?? ''}
        />
      </div>
      {isModalOpen && (
        <MDXPreviewerModal
          content={contentRef.current?.value ?? ''}
          onDismiss={close}
        />
      )}
    </>
  );
};
