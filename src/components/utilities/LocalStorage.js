const getLoadData = (getKey='read-list') => {
    const loadDataFromLoacalStore = localStorage.getItem(getKey)
    if (loadDataFromLoacalStore) {
        return JSON.parse(loadDataFromLoacalStore)
    }
    else {
        return []
    }
}
const setDataToLS = (id, getKey) => {
    const getDataFromLS = getLoadData()
    if (getDataFromLS.includes(id)) {
        alert('there are already exists in the read list')
    }
    else {
        getDataFromLS.push(id)
        const storeLS = JSON.stringify(getDataFromLS)
        localStorage.setItem(getKey, storeLS)
    }
}
setDataToLS()
export { getLoadData, setDataToLS }