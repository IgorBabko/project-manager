<?php

namespace ProjectManager;

use Illuminate\Database\Eloquent\Model;
use ProjectManager\Project;
use Illuminate\Http\Request;

class Client extends Model
{
    protected $guarded = [];

    
    public function projects()
    {
        
        return $this->hasMany(Project::class);
    }
    
    /**
     * Get ids of all projects that are attached to the client.
     *
     * @return \Illuminate\Http\JsonResponse
     *
     */    
    public function projectIds()
    {
        return $this->projects()->lists('id');
    }
    
    /**
     * Sync projects with the client.
     *
     * @return \ProjectManager\Client
     */
    protected function updateProjectsRelationship($ids)
    {
        Project::where('client_id', $this->id)->update(['client_id' => null]);
        
        Project::whereIn('id', $ids)->update(['client_id' => $this->id ]);
        
        return $this;
    }
    
    /**
     * Update client with project relationshp.
     *
     * @return \ProjectManager\Client
     */
    public function update(array $attributes = [], array $projectIds = [])
    {
        parent::update($attributes);
        
        $this->updateProjectsRelationship($projectIds);
        
        return $this;
    }
    
    /**
     * Destroy client with project relationship.
     *  
     * @return void
     */
    public function destroy()
    {
        $this->destroyProjectRelationship();
             
        parent::destroy();
    }
    
    /**
     * Destroy client's project relationshp.
     *
     * @return \ProjectManager\Client
     */
    protected function destroyProjectRelationship()
    {
        Project::where('client_id', $this->id)->update(['client_id' => null]);        
        
        return $this;
    }
}
