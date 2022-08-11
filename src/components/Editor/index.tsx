import React from 'react';

import { Allotment } from 'allotment';
import ReactMarkdown from 'react-markdown';
import styles from './editor.module.scss';

import defaultMarkdown from './default-markdown';
import { debounce } from 'lodash';

function Editor() {
  const [markdownContent, setMarkdownContent] = React.useState(defaultMarkdown);

  return (
    <div className={styles.container}>
      <Allotment>
        <Allotment.Pane minSize={400}>
          <div className={styles['markdown-title']}>MARKDOWN</div>

          <div className={styles['markdown-editor']}>
            <textarea
              placeholder="Write your markdown here..."
              autoFocus
              spellCheck={false}
              defaultValue={defaultMarkdown}
              onChange={debounce(
                (ev) => setMarkdownContent(ev.target.value),
                500
              )}
            />
          </div>
        </Allotment.Pane>

        <Allotment.Pane minSize={400}>
          <div className={styles['markdown-title']}>PREVIEW</div>

          <div className={styles['markdown-preview']}>
            <ReactMarkdown children={markdownContent} />
          </div>
        </Allotment.Pane>
      </Allotment>
    </div>
  );
}

export default Editor;
