import { Cocobase } from "cocobase";

const db = new Cocobase({
  apiKey: import.meta.env.VITE_COCOBASE_APIKEY,
  projectId: import.meta.env.VITE_COCOBASE_PROJECT_ID,
});
<<<<<<< HEAD

=======
>>>>>>> 8c16f03 (wait before merged)
export default db;