export type Guitar = { // Sirve para identificar que tipo de datos son(number, string, etc) y en caso de que haya algun error typescript te ayuda a identificarlos
    id: number
    name: string
    image: string
    description: string
    price: number
}
export type CartItem = Guitar & { // El Guitar & sirve para heredar los atributos del tipo que se le estan pasando
    quantity: number
}

export type GuitarId = Guitar['id']

// export type CartItem = Pick<Guitar, 'id' | 'name' | 'price'> & { //Estos son los utilitys sirven para heredar los atributos selecinados en este caso de guitar y se le agrega quantity como un atributo extra
//     quantity: number
// }