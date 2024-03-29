
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type SidebarType = {
    friends: Array<FriendsType>
}

export type PostType = {
    id: number
    post: string
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type FriendsType = {
    id: number
    name: string
    avatar: string
}

export type StoreType = {
    _state: RootStateType
    _rerenderEntireTree: () => void
    addPost: () => void
    updateNewPostText: (nextText: string) => void
    addMessage: () => void
    updateNewMessageText: (nextMessageText: string) => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
}

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, post: "Hi", likesCount: 15 },
                { id: 2, post: "Hi, how are you?", likesCount: 20 },
                { id: 3, post: "Hello, friend!", likesCount: 5 },
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Dimych" },
                { id: 2, name: "Andrey" },
                { id: 3, name: "Sveta" },
                { id: 4, name: "Sasha" },
                { id: 5, name: "Viktor" },
                { id: 6, name: "Valera" }
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How is your it-kamasutra?" },
                { id: 3, message: "Yo" },
                { id: 4, message: "Yo" },
                { id: 5, message: "Yo" },
            ],
            newMessageText: 'Hey bro!'
        },
        sidebar: {
            friends: [
                { id: 1, name: "Dimych", avatar: 'https://sun9-64.userapi.com/impg/mQnQb3d1jJ9y9KfsDwtdb2aD2J7VyhfxBadOgg/_0yQfA3B4p8.jpg?size=241x225&quality=96&sign=67c70c59641e14bcdfd925c60b702eb9&type=album'},
                { id: 2, name: "Andrey", avatar: 'https://sun9-64.userapi.com/impg/mQnQb3d1jJ9y9KfsDwtdb2aD2J7VyhfxBadOgg/_0yQfA3B4p8.jpg?size=241x225&quality=96&sign=67c70c59641e14bcdfd925c60b702eb9&type=album'},
                { id: 3, name: "Sveta", avatar: 'https://sun9-64.userapi.com/impg/mQnQb3d1jJ9y9KfsDwtdb2aD2J7VyhfxBadOgg/_0yQfA3B4p8.jpg?size=241x225&quality=96&sign=67c70c59641e14bcdfd925c60b702eb9&type=album'}
            ]
        }
    },
    _rerenderEntireTree () {
        console.log('State changed');
    },
    addPost () {
        const newPost: PostType = {
            id: new Date().getTime(),
            post: this._state.profilePage.newPostText,
            likesCount: 1
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree();
    },
    updateNewPostText (nextText: string) {
        this._state.profilePage.newPostText = nextText;
        this._rerenderEntireTree();
    },
    addMessage () {
        const newMessage: MessageType = {
            id: new Date().getTime(),
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._rerenderEntireTree();
    },
    updateNewMessageText (nextMessageText: string) {
        this._state.dialogsPage.newMessageText = nextMessageText;
        this._rerenderEntireTree();
    },
    subscribe (observer) {
        this._rerenderEntireTree = observer // observer - наблюдатель
    },
    getState() {
        return this._state
    }
}