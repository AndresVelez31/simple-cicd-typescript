# 🧮 simple-cicd-typescript

Este proyecto es una introducción práctica al desarrollo con **TypeScript**, pruebas automatizadas con **Jest**, análisis estático usando **ESLint**, y un flujo de **CI/CD** configurado con **GitHub Actions**.

El objetivo final es construir una **calculadora de números enteros**.  
Actualmente el repositorio solo implementa la operación de **suma**, que sirve como base para practicar correcciones, pruebas y validación del pipeline.

---

## 📌 Descripción del proyecto

Este repositorio contiene la estructura inicial de una calculadora escrita en TypeScript.  
La única operación implementada por ahora es:

- `sum(a, b)` → retorna la suma de dos enteros.

El proyecto incluye configuraciones listas para ejecutar:

- **ESLint** (pruebas estáticas)
- **Jest** (pruebas unitarias)
- **GitHub Actions** (pipeline de CI/CD)
- **Despliegue** mediante GitHub Pages

---

## 🎥 **Ver video de demostración:**  
[Haz clic aquí para abrir el video](https://eafit-my.sharepoint.com/personal/pvallej3_eafit_edu_co/_layouts/15/embed.aspx?UniqueId=c83df551-bb2d-4d3e-a90f-4f5b1b86d094)

---

## 📂 Estructura del proyecto

```text
.github/               # Contiene los workflows de GitHub Actions (CI/CD)
└── workflows/
    └── cicd.yml        # Pipeline que ejecuta lint, tests y deploy

.eslintrc.cjs          # Configuración de ESLint para TypeScript
.gitignore             # Archivos ignorados por Git

index.html             # Archivo de ejemplo para despliegue (GitHub Pages)

jest.config.cjs        # Configuración de Jest (framework de pruebas)

package.json           # Scripts y dependencias del proyecto
package-lock.json      # Bloqueo de versiones de dependencias

sum.ts                 # Implementación de la operación de suma (TypeScript)
sum.test.ts            # Prueba unitaria para la operación de suma

tsconfig.json          # Configuración del compilador de TypeScript 

Realizado por:
- Andres Felipe Velez Alvarez