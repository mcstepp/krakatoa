<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ParticipateInForumTest extends TestCase
{
    use DatabaseMigrations;

    /** @test  */
    public function an_authenticated_user_may_participate_in_forum_threads()
    {
        $user = create('App\User');
        $this->be($user);

        $thread = create('App\Thread');

        $reply = make('App\Reply');
        $this->post($thread->path() .'/replies', $reply->toArray());

        $this->get($thread->path())
            ->assertSee($reply->body);
    }

    /** @test */
    public function an_unauthenticated_user_may_not_add_replies()
    {
        $this->expectException('Illuminate\Auth\AuthenticationException');

        $this->post('/threads/1/replies', []);
    }
}
