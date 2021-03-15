import React from 'react';

const App: React.FC = () => {
  const [gridSize, setGridSize] = React.useState('4rem');
  const handleChangeGridSize = React.useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
    setGridSize(e.currentTarget.value);
  }, []);
  const [gridColorFG, setGridColorFG] = React.useState('#eee');
  const handleChangeGridColorFG = React.useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
    setGridColorFG(e.currentTarget.value);
  }, []);
  const [gridColorBG, setGridColorBG] = React.useState('#fff');
  const handleChangeGridColorBG = React.useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
    setGridColorBG(e.currentTarget.value);
  }, []);
  const background = React.useMemo(() => {
    return `${gridColorFG} url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2'><path fill='${encodeURIComponent(gridColorBG)}' d='M0 0H1V2H2V1H0Z'/></svg>") 0 0/${gridSize}`;
  }, [gridColorFG, gridColorBG, gridSize]);
  return (
    <div className="App container my-5">
      <a href="https://skeoh.com/" className="text-secondary">&larr; skeoh.com</a>
      <h1 className="mb-5">Grid background</h1>

      <form onSubmit={(e) => e.preventDefault()} className="card card-body my-3">
        <div className="row">
          <div className="form-group row col-md my-md-0">
            <label htmlFor="App-grid-size" className="col-xl-3 col-form-label">Grid size</label>
            <div className="col-xl-9">
              <input
                id="App-grid-size"
                className="form-control text-monospace"
                type="text"
                value={gridSize}
                onChange={handleChangeGridSize}
              />
            </div>
          </div>
          <div className="form-group row col-md my-md-0">
            <label htmlFor="App-grid-color-fg" className="col-xl-3 col-form-label">Color 1</label>
            <div className="col-xl-9">
              <input
                id="App-grid-color-fg"
                className="form-control text-monospace"
                type="text"
                value={gridColorFG}
                onChange={handleChangeGridColorFG}
              />
            </div>
          </div>
          <div className="form-group row col-md my-md-0">
            <label htmlFor="App-grid-color-bg" className="col-xl-3 col-form-label">Color 2</label>
            <div className="col-xl-9">
              <input
                id="App-grid-color-bg"
                className="form-control text-monospace"
                type="text"
                value={gridColorBG}
                onChange={handleChangeGridColorBG}
              />
            </div>
          </div>
        </div>
      </form>

      <div className="card card-body bg-dark my-3" style={{
        fontFamily: 'Consolas, "Courier New", monospace',
        whiteSpace: 'pre-wrap',
        overflowX: 'auto',
      }}>
        <div>
          <span style={{ color: '#d7ba7d' }}>body</span>
          <span style={{ color: '#d4d4d4' }}>&#32;&#123;</span>
        </div>
        <div>
          <span style={{ color: '#d4d4d4' }}>&#32;&#32;</span>
          <span style={{ color: '#9cdcfe' }}>background</span>
          <span style={{ color: '#d4d4d4' }}>:&#32;</span>
          <span style={{ color: '#ce9178' }}>{gridColorFG}</span>
          <span style={{ color: '#d4d4d4' }}>&#32;</span>
          <span style={{ color: '#dcdcaa' }}>url</span>
          <span style={{ color: '#d4d4d4' }}>(</span>
          <span style={{ color: '#ce9178' }}>"data:image/svg+xml,&lt;svg&#32;xmlns='http://www.w3.org/2000/svg'&#32;viewBox='0&#32;0&#32;2&#32;2'&gt;&lt;path&#32;fill='{encodeURIComponent(gridColorBG)}'&#32;d='M0&#32;0H1V2H2V1H0Z'/&gt;&lt;/svg&gt;"</span>
          <span style={{ color: '#d4d4d4' }}>)&#32;</span>
          <span style={{ color: '#b5cea8' }}>0</span>
          <span style={{ color: '#d4d4d4' }}>&#32;</span>
          <span style={{ color: '#b5cea8' }}>0</span>
          <span style={{ color: '#d4d4d4' }}>/</span>
          <span style={{ color: '#b5cea8' }}>{gridSize}</span>
          <span style={{ color: '#d4d4d4' }}>;</span>
        </div>
        <div>
          <span style={{ color: '#d4d4d4' }}>&#125;</span>
        </div>
      </div>

      <div className="card card-body my-3" style={{ background, height: '20rem' }}>
        <span className="display-3">Preview</span>
      </div>
    </div>
  );
}

export default App;
