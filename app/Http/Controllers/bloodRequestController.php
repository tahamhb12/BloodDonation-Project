<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\BloodRequest;
class bloodRequestController extends Controller
{
    protected $bloodrequest;
    public function __construct(){
        $this->bloodrequest = new bloodrequest();
        
    }
    public function index()
    {
        return $this->bloodrequest->all();
     
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'userid' => ['required', 'integer', 'max:255'],
            'bloodtype' => ['required', 'string', 'max:255'],
            'sexe' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'phonenumber' => ['required', 'string', 'min:10', 'max:10'],
            'description' => ['required', 'string', 'max:50'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255'],
        ]);

        return $this->bloodrequest->create($request->all());
    }
  
    public function show(string $id)
    {
     $bloodrequest = $this->bloodrequest->find($id);  
    }

    public function update(Request $request, string $id)
    {
         $bloodrequest = $this->bloodrequest->find($id);
         $bloodrequest->update($request->all());
         return $bloodrequest;
    }
    public function destroy(string $id)
    {
     $bloodrequest = $this->bloodrequest->find($id);
    return $bloodrequest->delete();   
    }
    public function destroyByEmail(string $email)
{
    return $this->bloodrequest->where('email', $email)->delete();
}
}