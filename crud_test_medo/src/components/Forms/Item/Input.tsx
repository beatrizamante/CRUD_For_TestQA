import React from "react";

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export default class Input extends React.Component<InputProps> {
  render() {
    const { label, name, value, onChange, type = "text" } = this.props;

    return (
      <div className="relative w-full flex-1 mb-6 mt-6">
        <input
          type={type}
          name={name}
          placeholder={label}
          value={value}
          onChange={onChange}
          className="h-[60px] block px-2.5 py-3 w-full text-sm bg-medium bg-opacity-80 appearance-none focus:outline-none disabled:bg-disabled-100 disabled:cursor-not-allowed disabled:text-disabled-100 peer text-lighter"
        />
        <label
          className={`pointer-events-none select-none absolute cursor-text text-sm text-lighter duration-300 px-1.5 bg-background left-1 top-1/2 -translate-y-1/2 z-[5] origin-[0] 
            ${value ? 'top-2 scale-75 -translate-y-5 bg-background' : ''} 
            peer-focus:px-1.5 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-lighter peer-focus:bg-background`}
          htmlFor={name}
        >
          {label}
        </label>
      </div>
    );
  }
}
