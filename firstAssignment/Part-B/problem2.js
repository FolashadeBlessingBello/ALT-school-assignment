function diffObjects(oldObj, newObj) {
  const result = { added: {}, removed: {}, changed: {} };

  for (const key in newObj) {
    if (!(key in oldObj)) {
      result.added[key] = newObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      result.changed[key] = { from: oldObj[key], to: newObj[key] };
    }
  }

  for (const key in oldObj) {
    if (!(key in newObj)) {
      result.removed[key] = oldObj[key];
    }
  }

  return result;
}
