<?php

namespace ProjectManager;

use Illuminate\Database\Eloquent\Model;
use ProjectManager\Client;
use Illuminate\Http\Request;

class Organisation extends Model
{
    protected $guarded = [];

    public function clients()
    {
        return $this->hasMany(Client::class);
    }
    
    /**
     * Get ids of all clients that are attached to the organisation.
     *
     * @return \Illuminate\Http\JsonResponse
     *
     */    
    public function clientIds()
    {
        return $this->clients()->lists('id');
    }
    
    /**
     * Sync clients with the organisation.
     *
     * @return \ProjectManager\Organisation
     */
    protected function updateClientsRelationship($ids)
    {
        $this->destroyClientsRelationship();        
        
        Client::whereIn('id', $ids)->update(['organisation_id' => $this->id ]);
        
        return $this;
    }
    
    /**
     * Update organisation with clients relationship.
     *
     * @return \ProjectManager\Organisation
     */
    public function update(array $attributes = [], array $projectIds = [])
    {
        parent::update($attributes);
        
        $this->updateClientsRelationship($projectIds);
        
        return $this;
    }
    
    /**
     * Destroy organisation with client relationship.
     *  
     * @return void
     */
    public function delete()
    {
        $this->destroyClientsRelationship();
             
        parent::delete();
    }
    
    /**
     * Destroy organisation's clients relationshp.
     *
     * @return \ProjectManager\Organisation
     */
    protected function destroyClientsRelationship()
    {
        Client::where('organisation_id', $this->id)->update(['organisation_id' => null]);        
        
        return $this;
    }
}
