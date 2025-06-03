export default function validationDueDateTask(req, res, next) {
    try {
        const { dueDate } = req.body;

        if (dueDate) {
            const dueDateTime = new Date(dueDate);
            const now = new Date();

            if (isNaN(dueDateTime.getTime())) {
                throw new Error("Formato de data inválido.");
            }

            if (dueDateTime < now) {
                throw new Error("A data de vencimento não pode ser anterior à data atual.");
            }
        }

        return next();
    } catch (error) {
        return res.status(400).json({
            erro: "Não foi possível validar o campo dueDate. " + error.message
        });
    }
}
