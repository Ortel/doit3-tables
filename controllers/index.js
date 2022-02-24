const { Cliente, Venta } = require('../models');

const createCliente = async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        return res.status(201).json({
            cliente,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll({
            include: [
                {
                    model: Venta
                }
            ]
        });
        return res.status(200).json({ clientes });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getClienteById = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findOne({
            where: { id: id },
            include: [
                {
                    model: Venta
                }
            ]
        });
        if (cliente) {
            return res.status(200).json({ cliente });
        }
        return res.status(404).send('Cliente with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
module.exports = {
    createCliente,
    getAllClientes,
    getClienteById
}

// const { Clientes, Ventas } = require('../models');

// const createcliente = async (req, res) => {
//     try {
//         const cliente = await cliente.create(req.body);
//         return res.status(201).json({
//             cliente,
//         });
//     } catch (error) {
//         return res.status(500).json({ error: error.message })
//     }
// }

// const getAllclientes = async (req, res) => {
//     try {
//         const clientes = await cliente.findAll({
//             include: [
//                 {
//                     model: Ventas
//                 }
//             ]
//         });
//         return res.status(200).json({ clientes });
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }

// const getclienteById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const cliente = await cliente.findOne({
//             where: { id: id },
//             include: [
//                 {
//                     model: Ventas
//                 }
//             ]
//         });
//         if (cliente) {
//             return res.status(200).json({ cliente });
//         }
//         return res.status(404).send('cliente with the specified ID does not exists');
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }

// const updatecliente = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const [updated] = await cliente.update(req.body, {
//             where: { id: id }
//         });
//         if (updated) {
//             const updatedcliente = await cliente.findOne({ where: { id: id } });
//             return res.status(200).json({ cliente: updatedcliente });
//         }
//         throw new Error('cliente not found');
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// };

// const deletecliente = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deleted = await cliente.destroy({
//             where: { id: id }
//         });
//         if (deleted) {
//             return res.status(204).send("cliente deleted");
//         }
//         throw new Error("cliente not found");
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// };

// module.exports = {
//     createcliente,
//     getAllclientes,
//     getclienteById,
//     updatecliente,
//     deletecliente
// }