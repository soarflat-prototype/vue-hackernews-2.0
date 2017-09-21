export default {
  // 現在のリストタイプとページネーションを基準にして表示する項目のID
  activeIds(state) {
    const { activeType, itemsPerPage, lists } = state;

    if (!activeType) {
      return [];
    }

    const page = Number(state.route.prarams.page) || 1;
    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;

    return lists[activeType].slice(start, end);
  },

  // 現在表示する項目
  activeItems(state, getters) {
    return getters.activeIds.map(id => state.items[id]).filter(_ => _);
  }
}