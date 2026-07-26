// Gates Malum's spirit arcana into the magic tree and removes its ore-free metal
// generation, which would otherwise hand out uranium and aluminium off a mob farm.
ServerEvents.recipes(event => {

    event.remove({ id: 'malum:node_focusing_iron' })

})
