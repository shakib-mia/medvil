import React from 'react';

const InputField = (props) => {
  const { textarea, className, type, ...restProps } = props;
  //   delete props.className;
  //   console.log(props);

  return textarea ? (
    <textarea
      className={`w-full rounded-lg bg-[#F3F6F7] px-3 py-2 text-grey-1 placeholder:text-grey-3 focus:outline-none${className ? ' ' + className : ''}`}
      {...restProps}
    ></textarea>
  ) : (
    <input
      {...restProps}
      className={`w-full rounded-lg bg-[#F3F6F7] px-3 py-2 text-grey-1 placeholder:text-grey-3 focus:outline-none${className ? ' ' + className : ''}`}
    />
  );
};

export default InputField;
