import app from './app';  

const PORT = process.env.PORT || 1234;

app.listen(PORT, (err?: Error) => {
    if (err) {
      console.error('Failed to start the server:', err);
      process.exit(1); 
    } else {
      console.log(`Server is running on port ${PORT}`);
    }
  });