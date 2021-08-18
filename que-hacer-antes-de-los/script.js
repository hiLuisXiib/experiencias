var app = new Vue({
    el: '#app',
    data: {
        lists: [{
                title: 'en los 20´s',
                tasks: [
                    { title: 'Ve a la universidad', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Aprende a cocinar', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Conoce la historia de tu familia', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Corre un maratón', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Empieza una rutina de ejercicio', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Ahorra', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Aumenta tu conocimiento de vinos', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Encuentra a tu mejor amigo', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Encuentra el trabajo de tus sueños', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Encuentra tu causa', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Ve a un festival de música', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Escribe una historia', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Lee, lee, lee', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Aprende a organizarte', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Deja de fumar', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Sumérgete en el lujo aunque sea una vez', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Equivócate', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Aprende a hacer networking', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Canta en público', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Aumenta tu conocimiento de vinos', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Viaja solo', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Viaja en pareja', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Viaja con tus amigos', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Familiarízate con otro idioma', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Disfruta estar en la naturaleza ', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Renta una casa con tus amigos', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Aprender a manejar un automovil', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Salir a citas', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Aprovecha toda la noche', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Haz tu marca', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Votar', desc: '', cost: '', time: '', complete: false, deleted: false }
                ]
            },
            {
                title: 'en los 30´s',
                tasks: [
                    { title: 'Aprende a relajarte', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Viaja al extranjero.', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Lee uno o varios libros clásicos', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Sacarte el carnet de conducir', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Ir a una fiesta en la playa', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Múdate a un lugar completamente nuevo', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Ver a tu grupo favorito', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Dedicarte un día a ti mismo para hacer lo que te apetezca', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Tener tu primer trabajo formal', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Pasarte unas vacaciones sin hacer nada', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Correr o caminar una carrera de 5 o 10 kilómetros', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Comprar un producto milagro caro de los que venden en TV.', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Contratar un Seguro de Gastos Médicos Mayores, por supuesto.', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Leer por lo menos 2 libros de finanzas personales', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Descubrir lo que te apasiona hacer.', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Aprender exactamente cómo funciona una tarjeta de crédito.', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Cambiar de carrera… nunca es tarde', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Líbrate de las personas tóxicas en tu vida', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Perdona a tus padres por cualquier error que hayan cometido', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Entra al mar en la noche', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Hazte un tatuaje', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Dona sangre', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Pasa una noche de fiesta', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Lee el libro del que todo el mundo está hablando', desc: '', cost: '', time: '', complete: false, deleted: false }
                ]
            },
            {
                title: 'en los 40´s',
                tasks: [
                    { title: 'Tomar un crucero', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Casarte o estar viviendo en una relación estable', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Cambiar de carrera…', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Perdona a alguien de tu pasado', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Líbrate de las personas tóxicas en tu vida', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Viaja solo', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Programa un masaje en un día estresante', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Visita un país que no conoces el idioma', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Ve a clases de baile', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Haz un trabajo de voluntariado', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Paga un té o un café para alguien de forma anónima', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Aprende a tocar un instrumento', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Crea tu propia huertaCambia tu corte de pelo', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Experimenta nuevos tipos de comida', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Ve a algún lugar que no tenga señal de teléfono ni acceso a Internet', desc: '', cost: '', time: '', complete: false, deleted: false },
                    { title: 'Prueba algún tratamiento de medicina alternativa', desc: '', cost: '', time: '', complete: false, deleted: false }
                ]
            },
        ],
        current_view: 1,
        current_list: 0,
        last_removed: [],
        timer: '',
        snackbar_active: false,
        snack_view: 0,
        selected_list: 0,
        list_entry: false,
        new_list: '',
        new_title: '',
        new_desc: '',
        cost_entry: false,
        new_cost: '',
        time_entry: false,
        new_time: ''
    },
    computed: {
        num_tasks: function() {
            return this.lists[this.current_list].tasks.length
        },
        num_left: function() {
            var output = 0;
            for (var i in this.lists[this.current_list].tasks) {
                if (!this.lists[this.current_list].tasks[i].complete) { output++ };
            };
            return output;
        }
    },
    methods: {
        add_task: function() {
            // Title Check
            if (!this.new_title) { return false; } // Display to the user that there need to be a title

            var new_task = {
                title: this.new_title,
                desc: this.new_desc,
                cost: this.new_cost,
                time: this.new_time,
                complete: false,
                deleted: false
            };

            this.lists[this.current_list].tasks.push(new_task);
            this.reset_variables();
            this.current_view = 2;
        },
        remove_task: function(index) {
            this.last_removed = [this.lists[this.current_list].tasks[index], index, eval(this.current_list)];
            this.lists[this.current_list].tasks[index].deleted = true;
            // Letting animation play through
            setTimeout(function() {
                app.lists[app.current_list].tasks.splice(index, 1);
                app.snackbar_active = true;
            }, 300);
            clearTimeout(this.timer);
            this.timer = setTimeout(function() { app.snackbar_active = false; }, 8300);
        },
        undo_remove_task: function() {
            if (this.last_removed.length !== 0) {
                this.last_removed[0].deleted = false;
                this.lists[this.last_removed[2]].tasks.splice(this.last_removed[1], 0, this.last_removed[0]);
                this.last_removed = [];
                clearTimeout(this.timer);
                this.snackbar_active = false;
            }
        },
        add_list: function() {
            var a = { title: this.new_list, tasks: [] };
            this.lists.push(a);
            this.new_list = '';
            this.list_entry = false;
        },
        remove_list: function() {
            this.snackbar_active = false;
            this.lists.splice(this.selected_list, 1);
        },
        remove_list_snack: function(index) {
            this.snack_view = 0;
            this.selected_list = index;
            this.snackbar_active = true;
            clearTimeout(this.timer);
        },
        reset_variables: function() {
            this.new_title = '';
            this.new_desc = '';
            this.cost_entry = false;
            this.time_entry = false;
            this.new_cost = '';
            this.new_time = '';
        }
    }
});