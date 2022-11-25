import { useForm } from 'react-hook-form'
import Button from '../components/Button'

type User = {
    name: string;
    nickname: string;
    profile: string;
}

const CreateAccount = () => {

    const { register,
        handleSubmit,
        formState: {
            errors
        } } = useForm<User>();

    const submit = (data: User) => {
        console.log(data)
    }

    return (
        <div className='container'>
            <h1>createAccount</h1>
            <form onSubmit={handleSubmit(submit)} className="space-y-6">
                <div>
                    <label className="block mb-0.5"
                        htmlFor="name">name*</label>
                    <input
                        className='rouded border border-slate-300'
                        autoComplete='name'
                        {...register('name', {
                            required: '必須項目　',
                            maxLength: {
                                value: 50,
                                message: '最大50文字です'
                            }
                        })} id="name" name="name" type="text" />
                    {errors.name && errors.name?.message}
                </div>

                <div>
                    <label className="block"
                        htmlFor="nickname">nickname*</label>
                    <input
                        className='rouded border border-slate-300'
                        autoComplete='off'
                        {...register('nickname', {
                            required: '必須項目',
                            maxLength: {
                                value: 50,
                                message: '最大50文字です'
                            }
                        })} id="nickname" name="nickname" type="text" />
                    {errors.nickname && errors.nickname?.message}
                </div>

                <div>
                    <label className="block"
                        htmlFor="profile">profile*</label>
                    <textarea
                        className='rouded border border-slate-300'
                        defaultValue=""
                        {...register('profile', {
                            required: '必須項目',
                            maxLength: {
                                value: 255,
                                message: '最大255文字です'
                            }
                        })} id="profile" name="profile" />
                    {errors.profile && errors.profile?.message}
                </div>
                <Button>addAccount</Button>
            </form>
        </div>
    )
}

export default CreateAccount