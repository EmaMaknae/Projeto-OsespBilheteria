const connection = require('../database');

// Função para criar um novo menu
exports.createMenu = (req, res) => {
    const { descricao, link, idPai, ordem, ativo } = req.body;
    connection.query('INSERT INTO tbMenu (descricao, link, idPai, ordem, ativo) VALUES (?, ?, ?, ?, ?)', [descricao, link, idPai, ordem, ativo], (error, results, fields) => {
        if (error) {
            console.error('Erro ao criar menu:', error);
            res.status(500).send('Erro ao criar menu');
            return;
        }
        res.json({ message: 'Menu criado com sucesso', id: results.insertId });
    });
};

// Função para listar todos os menus
exports.getAllMenus = (req, res) => {
    connection.query('SELECT * FROM tbMenu', (error, results, fields) => {
        if (error) {
            console.error('Erro ao buscar menus:', error);
            res.status(500).send('Erro ao buscar menus');
            return;
        }
        res.json(results);// Função para obter detalhes de um menu específico
        exports.getMenuById = (req, res) => {
            const menuId = req.params.menuId;
            
            // Verificar se o usuário é um administrador
            if (!req.user || req.user.role !== 'admin') {
                return res.status(403).send('Acesso não autorizado');
            }
        
            // Consulta para obter o menu
            connection.query('SELECT * FROM tbMenu WHERE id = ?', [menuId], (error, results, fields) => {
                if (error) {
                    console.error('Erro ao buscar menu:', error);
                    return res.status(500).send('Erro ao buscar menu');
                }
                if (results.length === 0) {
                    return res.status(404).send('Menu não encontrado');
                }
                res.json(results[0]);
            });
        };
        
        // Função para atualizar os detalhes de um menu específico
        exports.updateMenu = (req, res) => {
            const menuId = req.params.menuId;
            const { descricao, link, idPai, ordem, ativo } = req.body;
            
            // Verificar se o usuário é um administrador
            if (!req.user || req.user.role !== 'admin') {
                return res.status(403).send('Acesso não autorizado');
            }
        
            // Atualização do menu no banco de dados
            connection.query('UPDATE tbMenu SET descricao = ?, link = ?, idPai = ?, ordem = ?, ativo = ? WHERE id = ?', [descricao, link, idPai, ordem, ativo, menuId], (error, results, fields) => {
                if (error) {
                    console.error('Erro ao atualizar menu:', error);
                    return res.status(500).send('Erro ao atualizar menu');
                }
                res.json({ message: 'Menu atualizado com sucesso', id: menuId });
            });
        };
        
        // Função para excluir um menu específico
        exports.deleteMenu = (req, res) => {
            const menuId = req.params.menuId;
            
            // Verificar se o usuário é um administrador
            if (!req.user || req.user.role !== 'admin') {
                return res.status(403).send('Acesso não autorizado');
            }
        
            // Exclusão do menu no banco de dados
            connection.query('DELETE FROM tbMenu WHERE id = ?', [menuId], (error, results, fields) => {
                if (error) {
                    console.error('Erro ao excluir menu:', error);
                    return res.status(500).send('Erro ao excluir menu');
                }
                res.json({ message: 'Menu excluído com sucesso', id: menuId });
            });
        };
        
    });
};

// Função para obter detalhes de um menu específico
exports.getMenuById = (req, res) => {
    const menuId = req.params.menuId;
    connection.query('SELECT * FROM tbMenu WHERE id = ?', [menuId], (error, results, fields) => {
        if (error) {
            console.error('Erro ao buscar menu:', error);
            res.status(500).send('Erro ao buscar menu');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Menu não encontrado');
            return;
        }
        res.json(results[0]);
    });
};

// Função para atualizar os detalhes de um menu específico
exports.updateMenu = (req, res) => {
    const menuId = req.params.menuId;
    const { descricao, link, idPai, ordem, ativo } = req.body;
    connection.query('UPDATE tbMenu SET descricao = ?, link = ?, idPai = ?, ordem = ?, ativo = ? WHERE id = ?', [descricao, link, idPai, ordem, ativo, menuId], (error, results, fields) => {
        if (error) {
            console.error('Erro ao atualizar menu:', error);
            res.status(500).send('Erro ao atualizar menu');
            return;
        }
        res.json({ message: 'Menu atualizado com sucesso', id: menuId });
    });
};

// Função para excluir um menu específico
exports.deleteMenu = (req, res) => {
    const menuId = req.params.menuId;
    connection.query('DELETE FROM tbMenu WHERE id = ?', [menuId], (error, results, fields) => {
        if (error) {
            console.error('Erro ao excluir menu:', error);
            res.status(500).send('Erro ao excluir menu');
            return;
        }
        res.json({ message: 'Menu excluído com sucesso', id: menuId });
    });
};
