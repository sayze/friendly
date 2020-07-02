import React from 'react'

const Context = React.createContext({ props: {}, showModal: () => {}, hideModal: () => {} })
const Provider = Context.Provider

export default { Context, Provider }
