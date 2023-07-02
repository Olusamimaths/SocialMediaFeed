export function paginate({data, _page, _pageSize, setPageFunction}) {
  const offset = (_page - 1) * _pageSize;
  if (offset >= data.length) {
    return [];
  }
  const newData = data.slice(offset, offset + _pageSize);
  setPageFunction(_page);
  return newData;
}
