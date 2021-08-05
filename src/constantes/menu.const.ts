export const Administracion = [
    {
        "id": 1,
        "icon": "start",
        "nombre": "Administracion",
        "url": "/",
        "icono": true,
        "orden": 1,
        "hijo1": "Maestros",
        "hijo2": "Usuarios",
        "hijo3": {
            nombre: "Re-archivar",
            url: "/"
        },
        "hijo4": {
            nombre: "Des-archivar",
            url: "/"
        },
        "hijo5": {
            nombre: "Tramites en Linea",
            url: "/"
        },
        "hijo6": {
            nombre: "Transf.Doc.Pendientes",
            url: "/"
        },
        "hijo7": "Plantillas",
        "hijo8": "Inventario",
        "hijo9": "Reportes_Logs",

        "Maestros": [
            {
                "id": 101,
                "icon": "home",
                "nombre": "Ciudades",
                "url": "/",
                "icono": true
            },
            {
                "id": 102,
                "icon": "home",
                "nombre": "Departamento",
                "url": "/",
                "icono": true
            },
            {
                "id": 103,
                "icon": "home",
                "nombre": "Dependencias",
                "url": "/",
                "icono": true
            },
            {
                "id": 104,
                "icon": "home",
                "nombre": "Expedientes",
                "url": "/",
                "icono": true
            },
            {
                "id": 105,
                "icon": "home",
                "nombre": "Grupos",
                "url": "/",
                "icono": true
            },
            {
                "id": 106,
                "icon": "home",
                "nombre": "Medios",
                "url": "/",
                "icono": true
            },
            {
                "id": 107,
                "icon": "home",
                "nombre": "Naturalezas",
                "url": "/",
                "icono": true
            },
            {
                "id": 108,
                "icon": "home",
                "nombre": "Paises",
                "url": "/",
                "icono": true
            },
            {
                "id": 109,
                "icon": "home",
                "nombre": "Procedencias",
                "url": "/",
                "icono": true
            },
            {
                "id": 201,
                "icon": "home",
                "nombre": "Series",
                "url": "/",
                "icono": true
            },
            {
                "id": 202,
                "icon": "home",
                "nombre": "WorkFlow Acciones",
                "url": "/",
                "icono": true
            },
            {
                "id": 203,
                "icon": "home",
                "nombre": "WorkFlow Procesos",
                "url": "/",
                "icono": true
            },
            {
                "id": 204,
                "icon": "home",
                "nombre": "Tipologia",
                "url": "/",
                "icono": true
            },
            {
                "id": 205,
                "icon": "home",
                "nombre": "Forma de Conservacion",
                "url": "/",
                "icono": true
            },
            {
                "id": 206,
                "icon": "home",
                "nombre": "Ubicacion Fisica",
                "url": "/",
                "icono": true
            }
        ],
        "Usuarios": [
            {
                "id": 207,
                "icon": "home",
                "nombre": "Maestro Series",
                "url": "/",
                "icono": true
            }
        ],
        "Plantillas": [
            {
                "id": 208,
                "icon": "home",
                "nombre": "Permisos Plantillas",
                "url": "/",
                "icono": true
            }
        ],
        "Inventario": [
            {
                "id": 209,
                "icon": "home",
                "nombre": "Importar Datos",
                "url": "/",
                "icono": true
            }
        ],
        "Reportes_Logs": [
            {
                "id": 301,
                "icon": "home",
                "nombre": "Logs Movimiento",
                "url": "/",
                "icono": true
            },
            {
                "id": 302,
                "icon": "home",
                "nombre": "Logs Imagenes",
                "url": "/",
                "icono": true
            },
            {
                "id": 303,
                "icon": "home",
                "nombre": "Logs Plantillas",
                "url": "/",
                "icono": true
            },
            {
                "id": 304,
                "icon": "home",
                "nombre": "Logs Plantillas Permiso",
                "url": "/",
                "icono": true
            },
            {
                "id": 305,
                "icon": "home",
                "nombre": "Logs Errores",
                "url": "/",
                "icono": true
            },
            {
                "id": 306,
                "icon": "home",
                "nombre": "Logs Login",
                "url": "/",
                "icono": true
            },
            {
                "id": 307,
                "icon": "home",
                "nombre": "Logs Tablas Maestro",
                "url": "/",
                "icono": true
            },
            {
                "id": 308,
                "icon": "home",
                "nombre": "Logs Prestamos",
                "url": "/",
                "icono": true
            },
            {
                "id": 309,
                "icon": "home",
                "nombre": "Logs Stickers",
                "url": "/",
                "icono": true
            },
            {
                "id": 401,
                "icon": "home",
                "nombre": "Logs Reportes",
                "url": "/",
                "icono": true
            }
        ]

    }
]

export const Inicio = [
    {
        "id": 2,
        "icon": "start",
        "nombre": "Inicio",
        "url": "/",
        "icono": false,
        "orden": 0,
        "hijo": "Login",
        "Login": [
            {
                "id": 402,
                "icon": "home",
                "nombre": "Iniciar Sesion",
                "url": "/",
                "icono": true
            }
        ]

    }
]

export const Documentos = [
    {
        "id": 3,
        "icon": "start",
        "nombre": "Documentos",
        "url": "/",
        "icono": true,
        "orden": 1,
        "hijo1": "Recibidos",
        "hijo2": "Enviados",
        "hijo3": "Migracion",
        "Recibidos": [
            {
                "id": 403,
                "icon": "home",
                "nombre": "Facturas",
                "url": "/",
                "icono": true
            }
        ],
        "Enviados": [
            {
                "id": 404,
                "icon": "home",
                "nombre": "Plantilla",
                "url": "/",
                "icono": true
            }
        ],
        "Migracion": [
            {
                "id": 405,
                "icon": "home",
                "nombre": "Plantilla",
                "url": "/",
                "icono": true
            }
        ]

    }
]

export const WorkFlow = [
    {
        "id": 4,
        "icon": "start",
        "nombre": "Workflow",
        "url": "/",
        "icono": true,
        "orden": 1,
        "hijo1": "WorkFlow (Escritorio)",
        "hijo2": "Trabajos Anteriores"
    }
]
export const Consultas = [
    {
        "id": 5,
        "icon": "start",
        "nombre": "Consultas",
        "url": "/",
        "icono": true,
        "orden": 1,
        "hijo1": "Gestion",
        "Gestion": [
            {
                "id": 406,
                "icon": "home",
                "nombre": "Expediente",
                "url": "/",
                "icono": true
            },
            {
                "id": 407,
                "icon": "home",
                "nombre": "Recibidos",
                "url": "/",
                "icono": true
            },
            {
                "id": 408,
                "icon": "home",
                "nombre": "Enviados",
                "url": "/",
                "icono": true
            },
            {
                "id": 409,
                "icon": "home",
                "nombre": "Facturas",
                "url": "/",
                "icono": true
            },
            {
                "id": 501,
                "icon": "home",
                "nombre": "Series",
                "url": "/",
                "icono": true
            },
            {
                "id": 502,
                "icon": "home",
                "nombre": "Documentos Por Serie",
                "url": "/",
                "icono": true
            },
            {
                "id": 502,
                "icon": "home",
                "nombre": "Gestion De Tareas",
                "url": "/",
                "icono": true
            },
            {
                "id": 502,
                "icon": "home",
                "nombre": "Inventarios",
                "url": "/",
                "icono": true
            }
        ]
    }
]

export const Reportes = [
    {
        "id": 5,
        "icon": "start",
        "nombre": "Reportes",
        "url": "/",
        "icono": true,
        "orden": 1,
        "hijo1": "Dinamicos",
        "Dinamicos": [
            {
                "id": 406,
                "icon": "home",
                "nombre": "Documentos Recibidos",
                "url": "/",
                "icono": true
            },
            {
                "id": 407,
                "icon": "home",
                "nombre": "Documentos Enviados",
                "url": "/",
                "icono": true
            },
            {
                "id": 408,
                "icon": "home",
                "nombre": "Gestion Tareas",
                "url": "/",
                "icono": true
            },
            {
                "id": 409,
                "icon": "home",
                "nombre": "Informe Gestion",
                "url": "/",
                "icono": true
            },
            {
                "id": 501,
                "icon": "home",
                "nombre": "Reportes Radicados",
                "url": "/",
                "icono": true
            },
            {
                "id": 502,
                "icon": "home",
                "nombre": "Reporte Medios",
                "url": "/",
                "icono": true
            },
            {
                "id": 503,
                "icon": "home",
                "nombre": "Reporte Devoluciones",
                "url": "/",
                "icono": true
            },
            {
                "id": 504,
                "icon": "home",
                "nombre": "Documentos Sin Imagenes",
                "url": "/",
                "icono": true
            }
        ],
        "hijo2": {
            nombre: "Ciudades",
            url: "/"
        },
        "hijo3": {
            nombre: "Departamentos",
            url: "/"
        },
        "hijo4": {
            nombre: "Dependencias",
            url: "/"
        },
        "hijo5": {
            nombre: "Expedientes",
            url: "/"
        },
        "hijo6": {
            nombre: "Medios",
            url: "/"
        },
        "hijo7": {
            nombre: "Naturalezas",
            url: "/"
        },
        "hijo8": {
            nombre: "Paises",
            url: "/"
        },
        "hijo9": {
            nombre: "Procedencias",
            url: "/"
        },
        "hijo10": {
            nombre: "Procesos",
            url: "/"
        },
        "hijo11": {
            nombre: "Series",
            url: "/"
        },
        "hijo12": {
            nombre: "Usuarios",
            url: "/"
        },
        "hijo13": {
            nombre: "Seguridad",
            url: "/"
        }

    }
]

export const Prestamos = [
    {
        "id": 6,
        "icon": "start",
        "nombre": "Prestamos",
        "url": "/",
        "icono": true,
        "orden": 1,
        "hijo1": {
            nombre: "Prestamos",
            url: "/"
        },
        "hijo2": {
            nombre: "Devoluciones",
            url: "/"
        },
        "hijo3": {
            nombre: "Consultas",
            url: "/"
        }
    }
]

export const Ayuda = [
    {
        "id": 6,
        "icon": "start",
        "nombre": "Ayuda",
        "url": "/",
        "icono": true,
        "orden": 1,
        "hijo1": {
            nombre: "Manual En Linea",
            url: "/"
        },
        "hijo2": {
            nombre: "Manual En Linea Interactivo",
            url: "/"
        }
    }
]