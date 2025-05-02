export const sortByBaseName = (productItems) => {
    return productItems.toSorted((a, b) => {
        const baseNameA = a.baseName.toLowerCase();
        const baseNameB = b.baseName.toLowerCase();
        if(baseNameA > baseNameB){
            return 1
        }
        if(baseNameA < baseNameB){
            return -1
        }
    });
};