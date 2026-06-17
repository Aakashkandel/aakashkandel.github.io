import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Globe,
  Lock,
  LogOut,
  ShieldCheck,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

/* ── Configuration (set these in a .env file — see .env.example) ───────────── */
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID as string | undefined;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
const OWNER_EMAIL = 'aakashkandel9805@gmail.com';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: OWNER_EMAIL,
    href: `mailto:${OWNER_EMAIL}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+977 9867491591, +977 9805449777',
    href: 'tel:+9779867491591',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Devchuli-12, Nawalpur, Nepal',
    href: '#',
  },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/Aakashkandel', label: 'GitHub' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/aakash-kandel-b97b1b2a1/',
    label: 'LinkedIn',
  },
  { icon: Globe, href: 'https://aakashkandel.com.np/', label: 'Website' },
];

interface GoogleUser {
  name: string;
  email: string;
  picture: string;
}

/* Decode the payload of a Google ID-token (JWT) */
function parseJwt(token: string): Record<string, string> | null {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const json = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(json);
  } catch {
    return null;
  }
}

const Contact = () => {
  const { toast } = useToast();
  const googleBtnRef = useRef<HTMLDivElement>(null);
  const [user, setUser] = useState<GoogleUser | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* Load Google Identity Services and render the Sign-in button */
  useEffect(() => {
    if (!GOOGLE_CLIENT_ID || user) return;

    const init = () => {
      const g = (window as unknown as { google?: any }).google;
      if (!g?.accounts?.id) return;

      g.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: (resp: { credential: string }) => {
          const payload = parseJwt(resp.credential);
          if (payload?.email) {
            setUser({
              name: payload.name || payload.email,
              email: payload.email,
              picture: payload.picture || '',
            });
            setFormData((prev) => ({
              ...prev,
              name: payload.name || '',
              email: payload.email,
            }));
          }
        },
      });

      if (googleBtnRef.current) {
        g.accounts.id.renderButton(googleBtnRef.current, {
          theme: 'filled_black',
          size: 'large',
          shape: 'pill',
          text: 'continue_with',
          logo_alignment: 'center',
        });
      }
    };

    const existing = document.getElementById('gsi-script') as HTMLScriptElement | null;
    if (existing) {
      init();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.id = 'gsi-script';
    script.async = true;
    script.defer = true;
    script.onload = init;
    document.body.appendChild(script);
  }, [user]);

  const handleSignOut = () => {
    const g = (window as unknown as { google?: any }).google;
    g?.accounts?.id?.disableAutoSelect?.();
    setUser(null);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast({
        title: 'Email service not configured',
        description: 'Add your EmailJS keys to the .env file to enable sending.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: user.name,
          from_email: user.email,
          reply_to: user.email,
          subject: formData.subject,
          message: formData.message,
          to_email: OWNER_EMAIL,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      toast({
        title: 'Message sent!',
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
      setFormData((prev) => ({ ...prev, subject: '', message: '' }));
    } catch (err) {
      toast({
        title: 'Something went wrong',
        description: 'Your message could not be sent. Please try again or email me directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium mb-4 block">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Sign in with Google and send me a
            message.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, Odoo implementations, or opportunities to
              be part of your vision.
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <info.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block">{info.label}</span>
                    <span className="font-medium break-all">{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 bg-card rounded-xl border border-border hover:border-accent/30 hover:bg-accent/10 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border h-full">
              {!GOOGLE_CLIENT_ID ? (
                /* Config missing */
                <div className="flex flex-col items-center justify-center text-center h-full py-10 gap-3">
                  <Lock className="h-8 w-8 text-accent" />
                  <p className="font-display font-semibold">Sign-in not configured</p>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Add <code className="text-accent">VITE_GOOGLE_CLIENT_ID</code> to your{' '}
                    <code className="text-accent">.env</code> file to enable Google sign-in.
                  </p>
                </div>
              ) : !user ? (
                /* Login gate */
                <div className="flex flex-col items-center justify-center text-center h-full py-10 gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Lock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-lg mb-1">Sign in to continue</p>
                    <p className="text-sm text-muted-foreground max-w-xs">
                      Please sign in with your Google account to send me a message.
                    </p>
                  </div>
                  <div ref={googleBtnRef} className="flex justify-center min-h-[44px]" />
                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                    We only use your name and email to reply.
                  </p>
                </div>
              ) : (
                /* Signed in — show form */
                <form onSubmit={handleSubmit}>
                  {/* Signed-in chip */}
                  <div className="flex items-center justify-between gap-3 mb-6 p-3 rounded-xl bg-secondary/60 border border-border">
                    <div className="flex items-center gap-3 min-w-0">
                      {user.picture ? (
                        <img
                          src={user.picture}
                          alt={user.name}
                          referrerPolicy="no-referrer"
                          className="w-9 h-9 rounded-full"
                        />
                      ) : (
                        <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold">
                          {user.name.charAt(0)}
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">{user.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="shrink-0 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors"
                    >
                      <LogOut className="h-3.5 w-3.5" />
                      Sign out
                    </button>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 rounded-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
