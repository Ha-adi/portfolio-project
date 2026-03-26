const supabaseUrl = "https://xipboskoiqsxrdclrnlt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpcGJvc2tvaXFzeHJkY2xybmx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MzQ0OTMsImV4cCI6MjA5MDExMDQ5M30.DWmtoWaiusvvFiPWI9HxAFrvKl3srIgmZuN38airlE0";

const client = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById("form").addEventListener("submit", async function(e){
  e.preventDefault();

  const { error } = await client
    .from("feedback")
    .insert([
      {
        NAME: document.getElementById("name").value,
        EMAIL: document.getElementById("email").value,
        MESSAGE: document.getElementById("message").value
      }
    ]);

  if(error){
    alert("Error saving data");
    console.log(error);
  } else {
    alert("Message sent successfully!");
  }
});
