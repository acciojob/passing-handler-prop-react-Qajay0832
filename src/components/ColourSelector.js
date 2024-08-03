import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground,classname,label} = props
  const { background } = config;
  
  return (
    <button className={classname} onClick={() => selectNextBackground({background: background})} data-testid={config.key}>
        {label}
    </button>
  )
}
export default ColourSelector;
