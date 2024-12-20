import express from 'express'
import cors from 'cors'

async function run (){
  const app = express();
  const { Routes } = await import('./routes');
  app.use(cors());
  app.use(express.json());
  app.use(Routes())
  app.listen(3333, () => console.log('servidor rodando na porta 3333'))
}
run()