export const SortAdminTable = (sortBy, sortOrder, data) => {
    console.log(sortBy)
    let sortedData = data
    if (sortedData.length) {
        if (typeof sortedData[0][sortBy] == "number") {
            sortedData = sortedData.sort((a, b) => {
                if (sortOrder == "asc") {
                    return a[sortBy] - b[sortBy]
                }
                return b[sortBy] - a[sortBy]
            })
        } else {
            sortedData = sortedData.sort((a, b) => {
                if (sortOrder == "asc") {
                    if (a[sortBy] > b[sortBy]) {
                        return 1
                    }
                    return -1
                } else {
                    if (a[sortBy] < b[sortBy]) {
                        return 1
                    }
                    return -1
                }
            })
        }
    }
    return sortedData
}