function createSupplierRef(suppliersData){//for orders
    const supplierLookup = {}
    const supplierDataCopy = [...suppliersData]
   const creationLookup = supplierDataCopy.map((supplier)=>{
      const supplierCpy = {...supplier}
     supplierLookup[supplierCpy.dataValues.supplierName] = supplierCpy.dataValues.id
    })

    //{fothergill : 14}
    return supplierLookup
}

function addSupplierIdToModel(originalData,supplierLookup){//switch out shape in bird_orders
    const alteredArray = originalData.map((record)=>{
      const objCopy = {...record}
      objCopy.supplierId = supplierLookup[objCopy.supplierName]
      delete objCopy.supplierName
      return objCopy
    })
    return alteredArray
  }

 

  module.exports = {createSupplierRef,addSupplierIdToModel}
