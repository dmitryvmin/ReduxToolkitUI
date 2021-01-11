// In absence of real API saving candidate object step field
// directly to redux
export function updateStepField(data, {id, step}) {
  const _data = [...data];
  const idxToUpdate = _data.findIndex((obj => obj.id === id));
  _data[idxToUpdate].step = step;
  return _data;
}
