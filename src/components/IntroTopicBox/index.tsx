import React, {ReactNode} from 'react';
import clsx from 'clsx';

export default function IntroTopicBox({children, bgColor}): ReactNode {
 return (
    // <div className={clsx('col col--6')} >
    <div className='col col--6' >
        <div
          className='col-demo'
          style={{
            backgroundColor: bgColor || "#f6f6f6",
            borderRadius: '10px',
            padding: '1rem',
          }}
        >
          <div style={{display: 'contents'}}>
            {/* Remove bottom margin from direct child paragraphs */}
            {React.Children.map(children, child => {
              if (
                typeof child === 'object' &&
                child &&
                child.type === 'p'
              ) {
                return React.cloneElement(child, {
                  style: { ...(child.props.style || {}), marginBottom: 0 },
                });
              }
              return child;
            })}
          </div>
        </div>
    </div>
  );
}
