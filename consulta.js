const {
    Pool
} = require('pg')
require('dotenv').config()
const pool = new Pool({
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAMEDATABASE,
    host: process.env.DB_HOST
})

async function categories() {

    const consulta = {
        text: `select category_name from categories order by category_name asc`
    }
    try {
        const result = await pool.query(consulta)
        return result.rows
    } catch (error) {
        console.log(error)
        return error
    }
}
async function store() {

    const consulta = {
        text: `select store_name from stores order by store_name asc`
    }
    try {
        const result = await pool.query(consulta)
        return result.rows
    } catch (error) {
        console.log(error)
        return error
    }
}
async function brand() {
    const consulta = {
        text: `select brand_name from brands order by brand_name asc`
    }
    try {
        const result = await pool.query(consulta)
        return result.rows
    } catch (error) {
        console.log(error)
        return error
    }
}

async function mostrarTodo() {

    const consulta = {
        text: `select st.store_name, p.product_id, p.product_name,s.quantity
        from stores as st
        inner join stocks as s on s.store_id=st.store_id
        inner join products as p on p.product_id=s.product_id
        inner join categories as c on c.category_id=p.category_id `
    }
    try {

        const result = await pool.query(consulta)
        return result.rows

    } catch (error) {
        console.log(error)
        return error
    }


}

async function filter(store, category, brand) {

    const consulta = {
        text: `select st.store_name, p.product_id, p.product_name,s.quantity
                from stores as st
                inner join stocks as s on s.store_id=st.store_id
                inner join products as p on p.product_id=s.product_id
                inner join categories as c on c.category_id=p.category_id 
                inner join brands as b on b.brand_id=p.brand_id
                where st.store_name='${store}' and c.category_name='${category}' and b.brand_name='${brand}'`
    }
    try {

        const result = await pool.query(consulta)
        return result.rows

    } catch (error) {
        console.log(error)
        return error
    }
}
module.exports = {
    mostrarTodo,
    filter,
    categories,
    store,
    brand,

}