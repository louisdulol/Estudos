import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { splitMathSegments } from './studyEngine';

interface MathTextProps {
  text: string;
  className?: string;
}

function renderLatex(expr: string, displayMode: boolean): string {
  try {
    return katex.renderToString(expr.trim(), {
      displayMode,
      throwOnError: false,
      strict: false,
      output: 'htmlAndMathml',
    });
  } catch {
    return expr;
  }
}

export const MathText: React.FC<MathTextProps> = ({ text, className }) => {
  const segments = splitMathSegments(text);

  if (segments.length === 1 && segments[0].kind === 'text') {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {segments.map((seg, idx) => {
        if (seg.kind === 'text') {
          return <React.Fragment key={idx}>{seg.value}</React.Fragment>;
        }
        const isDisplay = seg.kind === 'display';
        const html = renderLatex(seg.value, isDisplay);
        if (isDisplay) {
          return (
            <span
              key={idx}
              className="my-2 block overflow-x-auto py-1 text-center"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        }
        return (
          <span
            key={idx}
            className="inline-block align-baseline"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      })}
    </span>
  );
};
