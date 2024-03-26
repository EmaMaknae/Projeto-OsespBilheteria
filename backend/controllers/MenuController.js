const connection = require('../database');


exports.createMenu = (req, res) => {
    const { descricao, link, idPai, ordem, ativo } = req.body;
    
    const query = 'INSERT INTO tbMenu (descricao, link, idPai, ordem, ativo) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [descricao, link, idPai, ordem, ativo], (error, results, fields) => {
        if (error) {
            console.error('Erro ao criar menu:', error);
            res.status(500).send('Erro ao criar menu');
            return;
        }
        res.json({ message: 'Menu criado com sucesso' });
    });
};

// Read: Obtém todos os menus
exports.getAllMenus = (req, res) => {
    connection.query('SELECT * FROM tbMenu', (error, results, fields) => {
        if (error) {
            console.error('Erro ao buscar menus:', error);
            res.status(500).send('Erro ao buscar menus');
            return;
        }
        res.json(results);
    });
};

// Obtém um menu pelo ID
exports.getMenuById = (req, res) => {
    const menuId = req.params.menuId;
    
    const query = 'SELECT * FROM tbMenu WHERE id = ?';
    connection.query(query, [menuId], (error, results, fields) => {
        if (error) {
            console.error('Erro ao buscar menu por ID:', error);
            res.status(500).send('Erro ao buscar menu por ID');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Menu não encontrado');
            return;
        }
        res.json(results[0]);
    });
};

// Update: Atualiza um menu existente
exports.updateMenu = (req, res) => {
    const { descricao, link, idPai, ordem, ativo } = req.body;
    const menuId = req.params.menuId;
    
    const query = 'UPDATE tbMenu SET descricao = ?, link = ?, idPai = ?, ordem = ?, ativo = ? WHERE id = ?';
    connection.query(query, [descricao, link, idPai, ordem, ativo, menuId], (error, results, fields) => {
        if (error) {
            console.error('Erro ao atualizar menu:', error);
            res.status(500).send('Erro ao atualizar menu');
            return;
        }
        res.json({ message: 'Menu atualizado com sucesso' });
    });
};

// Delete: Remove um menu existente
exports.deleteMenu = (req, res) => {
    const menuId = req.params.menuId;
    
    const query = 'DELETE FROM tbMenu WHERE id = ?';
    connection.query(query, [menuId], (error, results, fields) => {
        if (error) {
            console.error('Erro ao excluir menu:', error);
            res.status(500).send('Erro ao excluir menu');
            return;
        }
        res.json({ message: 'Menu excluído com sucesso' });
    });
};